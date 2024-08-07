// src/projects.js

const projects = [
  {
    id: 1,
    name: 'Skyvillage Apartment',
    area: '3750',
    location: 'Uliyakovil',
    passcode: '0001',
    stages: {
      designing: false,  // True if designing is completed, false otherwise
      execution: false  // True if execution is completed, false otherwise
    }
  },
  {
    id: 2,
    name: 'Manilal Residence',
    area: '3000',
    location: 'Chathannoor',
    passcode: '0002',
    stages: {
      designing: false,
      execution: false
    }
  },
  {
    id: 3,
    name: 'Prof.Divya Residence',
    area: '3500',
    location: 'Trivandrum',
    passcode: '0003',
    stages: {
      designing: false,
      execution: false
    }
  },
  {
    id: 4,
    name: 'Desinganad Scans',
    area: '4200',
    location: 'Kollam',
    passcode: '0004',
    stages: {
      designing: true,
      execution: false
    }
  },
  {
    id: 5,
    name: 'Dr.Sreekesh Residence',
    area: '3000',
    location: 'Kottayam',
    passcode: '0005',
    stages: {
      designing: false,
      execution: false
    }
  },
  {
    id: 6,
    name: 'Rajagopal Residence',
    area: '3200',
    location: 'Thevally',
    passcode: '0006',
    stages: {
      designing: false,
      execution: false
    }
  }
  // Add more projects as needed with incremented passcodes
];

export default projects;
