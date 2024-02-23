// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AppHandler {
    address public owner;
    uint256 public fileIdCounter;

    struct Institution {
        string aicteId;
        string name;
        string location;
        string email;
        string phoneNumber;
    }

    struct Agency {
        string agencyId;
        string name;
        string location;
        string email;
        string phoneNumber;
    }

    struct Business {
        string businessName;
        string pan;
        string location;
        string email;
        string phoneNumber;
    }

    struct Recipient {
        string certRecipientName;
        string segmentType;
        string email;
        string phoneNumber;
    }

    struct Certificate {
        uint256 fileId;
        string fileHash;
        string description;
        string segmentType;
        address ownerAddress;
    }

    mapping(address => Institution) public userInstitutions;
    mapping(address => Agency) public userAgencies;
    mapping(address => Business) public userBusinesses;
    mapping(address => Recipient) public userRecipients;
    mapping(address => Certificate[]) public userCertificates;

    event UserAdded(address indexed user);
    event FileUploaded(
    address indexed user,
    uint256 fileId,
    string fileHash,
    string description,
    string segmentType,
    address ownerAddress
    );
    event InstitutionAdded(
        address indexed user,
        string aicteId,
        string name,
        string location,
        string email,
        string phoneNumber
    );
    event AgencyAdded(
        address indexed user,
        string agencyId,
        string name,
        string location,
        string email,
        string phoneNumber
    );
    event BusinessAdded(
        address indexed user,
        string businessName,
        string pan,
        string location,
        string email,
        string phoneNumber
    );
    event RecipientAdded(
        address indexed user,
        string certRecipientNameName,
        string segmentType,
        string email,
        string phoneNumber
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier userExists() {
        require(userCertificates[msg.sender].length > 0, "User does not exist");
        _;
    }

    constructor() {
        owner = msg.sender;
        fileIdCounter = 1;
    }

    function addInstitution(
    string memory _aicteId,
    string memory _name,
    string memory _location,
    string memory _email,
    string memory _phoneNumber
) external {
    require(
        bytes(userInstitutions[msg.sender].aicteId).length == 0,
        "Institution already added"
    );
    Institution memory newInstitution = Institution({
        aicteId: _aicteId,
        name: _name,
        location: _location,
        email: _email,
        phoneNumber: _phoneNumber
    });
    userInstitutions[msg.sender] = newInstitution;
    emit InstitutionAdded(
        msg.sender,
        _aicteId,
        _name,
        _location,
        _email,
        _phoneNumber
    );
    }

    function getInstitutionInfo(string memory _aicteId)
    external
    view
    returns (
        string memory name,
        string memory location,
        string memory email,
        string memory phoneNumber
    )
{
    require(bytes(_aicteId).length > 0, "Invalid AICTE ID");

    Institution memory institution = userInstitutions[msg.sender];

    // Check if the institution with the provided AICTE ID exists
    require(
        keccak256(abi.encodePacked(institution.aicteId)) ==
            keccak256(abi.encodePacked(_aicteId)),
        "Institution not found"
    );

    name = institution.name;
    location = institution.location;
    email = institution.email;
    phoneNumber = institution.phoneNumber;
}

    function addAgency(
    string memory _agencyId,
    string memory _name,
    string memory _location,
    string memory _email,
    string memory _phoneNumber
) external {
    require(
        bytes(userAgencies[msg.sender].agencyId).length == 0,
        "Agency already added"
    );
    Agency memory newAgency = Agency({
        agencyId: _agencyId,
        name: _name,
        location: _location,
        email: _email,
        phoneNumber: _phoneNumber
    });
    userAgencies[msg.sender] = newAgency;
    emit AgencyAdded(
        msg.sender,
        _agencyId,
        _name,
        _location,
        _email,
        _phoneNumber
    );
}

    function addBusiness(
    string memory _businessName,
    string memory _pan,
    string memory _location,
    string memory _email,
    string memory _phoneNumber
) external {
    require(
        bytes(userBusinesses[msg.sender].businessName).length == 0,
        "Business already added"
    );
    Business memory newBusiness = Business({
        businessName: _businessName,
        pan: _pan,
        location: _location,
        email: _email,
        phoneNumber: _phoneNumber
    });
    userBusinesses[msg.sender] = newBusiness;
    emit BusinessAdded(
        msg.sender,
        _businessName,
        _pan,
        _location,
        _email,
        _phoneNumber
    );
}

    function addRecipient(
    string memory _certRecipientName,
    string memory _segmentType,
    string memory _email,
    string memory _phoneNumber
) external {
    require(
        bytes(userRecipients[msg.sender].certRecipientName).length == 0,
        "Recipient already added"
    );
    Recipient memory newRecipient = Recipient({
        certRecipientName: _certRecipientName,
        segmentType: _segmentType,
        email: _email,
        phoneNumber: _phoneNumber
    });
    userRecipients[msg.sender] = newRecipient;
    emit RecipientAdded(
        msg.sender,
        _certRecipientName,
        _segmentType,
        _email,
        _phoneNumber
    );
}

function getAgencyInfo(string memory _agencyId)
    external
    view
    returns (
        string memory name,
        string memory location,
        string memory email,
        string memory phoneNumber
    )
{
    require(bytes(_agencyId).length > 0, "Invalid Agency ID");

    Agency memory agency = userAgencies[msg.sender];

    // Check if the agency with the provided ID exists
    require(
        keccak256(abi.encodePacked(agency.agencyId)) ==
            keccak256(abi.encodePacked(_agencyId)),
        "Agency not found"
    );

    name = agency.name;
    location = agency.location;
    email = agency.email;
    phoneNumber = agency.phoneNumber;
}

function getBusinessInfo(string memory _pan)
    external
    view
    returns (
        string memory businessName,
        string memory location,
        string memory email,
        string memory phoneNumber
    )
{
    require(bytes(_pan).length > 0, "Invalid PAN");

    Business memory business = userBusinesses[msg.sender];

    // Check if the business with the provided PAN exists
    require(
        keccak256(abi.encodePacked(business.pan)) ==
            keccak256(abi.encodePacked(_pan)),
        "Business not found"
    );

    businessName = business.businessName;
    location = business.location;
    email = business.email;
    phoneNumber = business.phoneNumber;
}

function getRecipientInfo(string memory _phoneNumber)
    external
    view
    returns (
        string memory certRecipient,
        string memory segmentType,
        string memory email,
        string memory phoneNumber
    )
{
    require(bytes(_phoneNumber).length > 0, "Invalid Phone Number");

    Recipient memory recipient = userRecipients[msg.sender];

    // Check if the recipient with the provided phone number exists
    require(
        keccak256(abi.encodePacked(recipient.phoneNumber)) ==
            keccak256(abi.encodePacked(_phoneNumber)),
        "Recipient not found"
    );

    certRecipient = recipient.certRecipientName;
    segmentType = recipient.segmentType;
    email = recipient.email;
    phoneNumber = recipient.phoneNumber;
}

    function uploadCertificate(
    string memory _fileHash,
    string memory _description,
    string memory _segmentType,
    address _ownerAddress
) external returns (uint256 fileId) {
    require(_ownerAddress != address(0), "Invalid owner address");

    // Check if msg.sender is a registered user in any of the segments
    require(
        bytes(userInstitutions[msg.sender].aicteId).length > 0 ||
            bytes(userAgencies[msg.sender].agencyId).length > 0 ||
            bytes(userBusinesses[msg.sender].businessName).length > 0,
        "User not registered in any segment"
    );
    fileId = fileIdCounter++;
    Certificate memory newCertificate = Certificate(
        fileId,
        _fileHash,
        _description,
        _segmentType,
        _ownerAddress
    );
    userCertificates[msg.sender].push(newCertificate);
    emit FileUploaded(
        msg.sender,
        fileId,
        _fileHash,
        _description,
        _segmentType,
        _ownerAddress
    );
}

function getFileInfo(uint256 fileId)
    external
    view
    returns (
        string memory fileHash,
        string memory description,
        string memory segmentType,
        address ownerAddress
    )
{
    require(fileId > 0 && fileId <= fileIdCounter, "Invalid fileId");
    for (uint256 i = 0; i < userCertificates[msg.sender].length; i++) {
        if (userCertificates[msg.sender][i].fileId == fileId) {
            Certificate memory certificate = userCertificates[msg.sender][i];
            fileHash = certificate.fileHash;
            description = certificate.description;
            segmentType = certificate.segmentType;
            ownerAddress = certificate.ownerAddress;
            return (fileHash, description, segmentType, ownerAddress);
        }
    }
    revert("File not found");
}

function isRegisteredUser(address userAddress) external view returns (bool) {
    // Check if the provided address is registered in any of the segments
    return (
        bytes(userInstitutions[userAddress].aicteId).length > 0 ||
        bytes(userAgencies[userAddress].agencyId).length > 0 ||
        bytes(userBusinesses[userAddress].businessName).length > 0
    );
}
}

// Function to add a new company issuer
    function addCompanyIssuer(
        string memory companyName,
        string memory companyRegistrationNumber,
        string memory companyRegistrationCertHash,
        string memory companyEmail,
        uint64 companyPhone, 
        string memory companyRegisteredAddress, 
        bool isVerified
    ) public {
        require(isVerified == true, "Email verification required to confirm company registration");
        Company storage newCompany = companies[companyName];
        require(newCompany.companyAdminAddress == address(0), "Company already exists");
        newCompany.companyName = companyName;
        newCompany.companyRegistrationNumber = companyRegistrationNumber;
        newCompany.companyRegistrationCertHash = companyRegistrationCertHash;
        newCompany.companyEmail = companyEmail;
        newCompany.companyPhone = companyPhone;
        newCompany.companyRegisteredAddress = companyRegisteredAddress;
        newCompany.companyAdminAddress = msg.sender;
    }

    // Function to add a new event issuer
    function addEventIssuer(
        string memory eventName, 
        string memory eventOrganizer, 
        string[] memory eventSponsors, 
        string memory organizerRegistrationNumber, 
        string memory organizerRegistrationCertHash, 
        string memory organizerRegisteredAddress, 
        uint64 organizerPhone, 
        address organizerAdminAddress
    ) public {
        Event storage newEvent = events[eventName];
        require(newEvent.organizerAdminAddress == address(0), "Event already exists");
        newEvent.eventName = eventName;
        newEvent.eventOrganizer = eventOrganizer;
        newEvent.eventSponsors = eventSponsors;
        newEvent.organizerRegistrationNumber = organizerRegistrationNumber;
        newEvent.organizerRegistrationCertHash = organizerRegistrationCertHash;
        newEvent.organizerRegisteredAddress = organizerRegisteredAddress;
        newEvent.organizerPhone = organizerPhone;
        newEvent.organizerAdminAddress = organizerAdminAddress;
    }

    // Function to add a new recipient
    function addRecipient(
        string memory recipientName, 
        string memory recipientEmail, 
        string memory recipientPhone, 
        address recipientAddress
    ) public {
        Recipient storage newRecipient = recipients[recipientName];
        require(newRecipient.recipientAddress == address(0), "Recipient already exists");
        newRecipient.recipientName = recipientName;
        newRecipient.recipientEmail = recipientEmail;
        newRecipient.recipientPhone = recipientPhone;
        newRecipient.recipientAddress = recipientAddress;
    }