// Sample user data for login verification
export const sampleUsers = [
  {
    id: 1,
    name: "Dev Malik",
    email: "dev.malik@example.com",
    password: "password123",
    role: "researcher",
    accreditationType: "id",
    accreditationId: "NABL-12345",
    labName: "Central Water Research Lab",
    labAddress: "123 Research Avenue, Science District, Mumbai, Maharashtra 400001",
    labPhone: "+91-22-1234-5678",
    labEmail: "info@centralwaterlab.com"
  },
  {
    id: 2,
    name: "Dhruv",
    email: "dhruv@example.com",
    password: "password123",
    role: "researcher",
    accreditationType: "certificate",
    accreditationId: "NABL-12345",
    labName: "Environmental Monitoring Institute",
    labAddress: "456 Green Street, Eco Park, Delhi, Delhi 110001",
    labPhone: "+91-11-9876-5432",
    labEmail: "contact@emi.gov.in"
  },
  {
    id: 3,
    name: "Kanishka Bhatt",
    email: "kanishka.bhatt@example.com",
    password: "password123",
    role: "researcher",
    accreditationType: "id",
    accreditationId: "CPCB-20002",
    labName: "Water Technology Solutions",
    labAddress: "789 Innovation Hub, Tech City, Bangalore, Karnataka 560001",
    labPhone: "+91-80-5555-1234",
    labEmail: "research@watertech.com"
  },
  {
    id: 4,
    name: "Shruti Bhardwaj",
    email: "shruti.bhardwaj@example.com",
    password: "password123",
    role: "researcher",
    accreditationType: "id",
    accreditationId: "SPCB-30003",
    labName: "State Pollution Control Board Lab",
    labAddress: "321 Government Complex, Administrative Area, Chennai, Tamil Nadu 600001",
    labPhone: "+91-44-3333-7777",
    labEmail: "lab@spcb.tn.gov.in"
  },
  {
    id: 5,
    name: "Aahana Verma",
    email: "aahana.verma@example.com",
    password: "password123",
    role: "researcher",
    accreditationType: "certificate",
    accreditationId: "",
    labName: "University Environmental Research Center",
    labAddress: "654 Academic Block, University Campus, Pune, Maharashtra 411007",
    labPhone: "+91-20-2222-8888",
    labEmail: "environment@university.edu"
  },
  {
    id: 6,
    name: "Ritika Gupta",
    email: "ritika.gupta@example.com",
    password: "password123",
    role: "general",
    accreditationType: "",
    accreditationId: "",
    labName: "",
    labAddress: "",
    labPhone: "",
    labEmail: ""
  }
];

// Helper function to find user by email
export const findUserByEmail = (email) => {
  return sampleUsers.find(user => user.email.toLowerCase() === email.toLowerCase());
};

// Helper function to validate researcher credentials
export const validateResearcherLogin = (email, accreditationId, loginMethod) => {
  const user = findUserByEmail(email);
  
  if (!user || user.role !== "researcher") {
    return { success: false, message: "User not found or not a researcher." };
  }

  if (loginMethod === "id") {
    if (user.accreditationType !== "id" || user.accreditationId !== accreditationId) {
      return { success: false, message: "Invalid accreditation ID." };
    }
  } else if (loginMethod === "certificate") {
    if (user.accreditationType !== "certificate") {
      return { success: false, message: "No certificate found for this account." };
    }
  }

  return { success: true, user };
};

// Helper function to validate general user login
export const validateGeneralLogin = (email, password) => {
  const user = findUserByEmail(email);
  
  if (!user || user.role !== "general") {
    return { success: false, message: "User not found or not a general user." };
  }

  if (user.password !== password) {
    return { success: false, message: "Invalid password." };
  }

  return { success: true, user };
};
