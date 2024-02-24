// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import './verifier.sol';

contract CredentialSystem is Verifier{
    
    struct Institution {
        string institutionName;
        string institutionRegisteredAddress;
        string institutionEmail;
        uint64 institutionPhone;
        address institutionAdminAddress;
    }
    
    struct Company {
        string companyName;
        string companyRegistrationNumber;
        string companyRegistrationCertHash;
        string companyEmail;
        uint64 companyPhone;
        string companyRegisteredAddress;
        address companyAdminAddress;
    }
    
    struct Event {
        string eventName;
        string eventOrganizer;
        string[] eventSponsors;
        string organizerRegistrationNumber;
        string organizerRegistrationCertHash;
        string organizerRegisteredAddress;
        uint64 organizerPhone;
        address organizerAdminAddress;
    }
    
    struct Recipient {
        string recipientName;
        string recipientEmail;
        string recipientPhone;
        address recipientAddress;
    }
    
    struct Credential {
        string certType;
        string certName;
        string certIssuanceDate;
        string certUploadHash;
        string recipientName;
        string recipientEdUid;
        address recipientAddress;
        string zkProof;
    }
    
    mapping(string => Institution) institutions;
    mapping(string => Company) companies;
    mapping(string => Event) events;
    mapping(string => Recipient) recipients;
    mapping(string => Credential) credentials;
    mapping(string => string) sharedDocuments;
    mapping(address => string[]) zkProofsByAddress;
    
    // Modifiers
    modifier onlyInstitutionAdmin(string memory _aicteId) {
        require(institutions[_aicteId].institutionAdminAddress == msg.sender, "Only institution admin can perform this action");
        _;
    }
    
    modifier onlyCompanyAdmin(string memory _companyId) {
        require(companies[_companyId].companyAdminAddress == msg.sender, "Only company admin can perform this action");
        _;
    }
    
    modifier onlyEventOrganizer(string memory _eventId) {
        require(events[_eventId].organizerAdminAddress == msg.sender, "Only event organizer can perform this action");
        _;
    }
    
    modifier onlyRecipient(string memory _recipientId) {
        require(recipients[_recipientId].recipientAddress == msg.sender, "Only recipient can perform this action");
        _;
    }
    
    function addEducationalIssuer(
        string memory aicteId,
        string memory institutionName, 
        string memory institutionRegisteredAddress, 
        string memory institutionEmail,
        bool isVerified,
        uint64 institutionPhone
    ) public onlyInstitutionAdmin(aicteId) payable returns (string memory) {
        require(isVerified == true, "Email verification required to confirm institution registration");
        require(msg.value == 0.1 ether, "Please pay an upfront amount of 0.1 ether to register your institution");

        // Check if the admin address already exists as the admin of another institution
        require(institutions[aicteId].institutionAdminAddress != msg.sender, "Caller is already the admin of another institution");

        // Check if the institution already exists for the given aicteId
        require(institutions[aicteId].institutionAdminAddress == address(0), "Institution already exists");

        // Create a new institution entry
        Institution storage newInstitution = institutions[aicteId];
        newInstitution.institutionName = institutionName;
        newInstitution.institutionRegisteredAddress = institutionRegisteredAddress;
        newInstitution.institutionEmail = institutionEmail;
        newInstitution.institutionPhone = institutionPhone;
        newInstitution.institutionAdminAddress = msg.sender;

        // Refund the initial 0.1 ETH back to the msg.sender (adminAddress)
        payable(msg.sender).transfer(msg.value);

        return aicteId;
    }

    function getEduInstitutionInfo(
    string memory aicteId
    ) public onlyInstitutionAdmin(aicteId) view returns (Institution memory) {
    Institution memory institution = institutions[aicteId];
    require(institution.institutionAdminAddress == msg.sender, "Caller is not the admin of this institution");
    return institution;
    }

    function issueEduCredential(
        string memory aicteId,
        string memory certType,
        string memory certName,
        string memory certIssuanceDate,
        string memory certUploadHash,
        string memory recipientName,
        string memory recipientEdUid,
        address recipientAddress,
        string memory zkProof
    ) public onlyInstitutionAdmin(aicteId) returns (string memory) {
        require(institutions[aicteId].institutionAdminAddress == msg.sender, "Only institution admin can issue credentials");
        require(recipients[recipientEdUid].recipientAddress == recipientAddress, "Recipient not found");

        zkProof = '';
        zkProofsByAddress[recipients[recipientEdUid].recipientAddress].push(zkProof);

        
        // Create a new credential entry
        Credential storage newCredential = credentials[certUploadHash];
        newCredential.certType = certType;
        newCredential.certName = certName;
        newCredential.certIssuanceDate = certIssuanceDate;
        newCredential.certUploadHash = certUploadHash;
        newCredential.recipientName = recipientName;
        newCredential.recipientEdUid = recipientEdUid;
        newCredential.recipientAddress = recipientAddress;
        newCredential.zkProof = zkProof;
        
        return certUploadHash;
    }

    function getCredentialInfo(string memory certUploadHash, string memory aicteId) onlyInstitutionAdmin(aicteId) public view returns (
    string memory certType,
    string memory certName,
    string memory certIssuanceDate,
    string memory recipientName,
    string memory recipientEdUid,
    address recipientAddress
    ) {
    
    Credential storage credential = credentials[certUploadHash];
    
    certType = credential.certType;
    certName = credential.certName;
    certIssuanceDate = credential.certIssuanceDate;
    recipientName = credential.recipientName;
    recipientEdUid = credential.recipientEdUid;
    recipientAddress = credential.recipientAddress;
}

    function createZKProof(
        string memory certUploadHash,
        string memory zkProof
    ) public onlyRecipient(certUploadHash) {
        credentials[certUploadHash].zkProof = zkProof;
    }

    // New function to map zk proof to an address
    function mapZKProofToAddress(address _address, string memory zkProof) public {
        zkProofsByAddress[_address].push(zkProof);
    }
    
    // New function to retrieve all zk proofs associated with an address
    function getZKProofsByAddress(address _address) public view returns (string[] memory) {
        return zkProofsByAddress[_address];
    }
}