// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialSystem {
    
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
    }
    
    mapping(string => Institution) institutions;
    mapping(string => Company) companies;
    mapping(string => Event) events;
    mapping(string => Recipient) recipients;
    mapping(string => Credential) credentials;
    mapping(string => string) sharedDocuments;
    mapping(string => string) accessTokens;
    
    // Modifiers
    modifier onlyInstitutionAdmin(string memory _institutionId) {
        require(institutions[_institutionId].institutionAdminAddress == msg.sender, "Only institution admin can perform this action");
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

    // Function to add a new educational issuer (institution)
    function addEducationalIssuer(
        string memory aicteId, 
        string memory institutionName, 
        string memory institutionRegisteredAddress, 
        string memory institutionEmail,
        bool isVerified,
        uint64 institutionPhone
    ) public returns (string memory) {
            require(isVerified == true, "Email verification required to confirm institution registration");
            address institutionAdminAddress = msg.sender;
            Institution memory newInstitution = Institution(institutionName, institutionRegisteredAddress, institutionEmail, institutionPhone, institutionAdminAddress);
            institutions[aicteId] = newInstitution;
            return aicteId;
    }

    // Function to add a new company issuer
    function addCompanyIssuer(string memory companyName, string memory companyRegistrationNumber, string memory companyRegistrationCertHash, string memory companyEmail, uint64 companyPhone, string memory companyRegisteredAddress, address companyAdminAddress) public {
        Company memory newCompany = Company(companyName, companyRegistrationNumber, companyRegistrationCertHash, companyEmail, companyPhone, companyRegisteredAddress, companyAdminAddress);
        companies[companyName] = newCompany;
    }

    // Function to add a new event issuer
    function addEventIssuer(string memory eventName, string memory eventOrganizer, string[] memory eventSponsors, string memory organizerRegistrationNumber, string memory organizerRegistrationCertHash, string memory organizerRegisteredAddress, uint64 organizerPhone, address organizerAdminAddress) public {
        Event memory newEvent = Event(eventName, eventOrganizer, eventSponsors, organizerRegistrationNumber, organizerRegistrationCertHash, organizerRegisteredAddress, organizerPhone, organizerAdminAddress);
        events[eventName] = newEvent;
    }

    // Function to add a new recipient
    function addRecipient(string memory recipientName, string memory recipientEmail, string memory recipientPhone, address recipientAddress) public {
        Recipient memory newRecipient = Recipient(recipientName, recipientEmail, recipientPhone, recipientAddress);
        recipients[recipientName] = newRecipient;
    }

    // Add other functions as needed
}