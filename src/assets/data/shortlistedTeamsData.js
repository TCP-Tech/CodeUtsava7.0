const shortlistedTeams = [
  {
    "name": "Merge Issues",
    "leader": "",
    "member1": "Mokshit Surana",
    "member2": "Archit Rathod",
    "member3": "Prateek Vishwakarma",
    "member4": "Veer Pariawala",
    "college": "Thadomal Shahani Engineering College, Mumbai"
  },
  {
    "name": "MinGWx86",
    "leader": "",
    "member1": "Sachin Jangid",
    "member2": "Siddesh Shetty",
    "member3": "Omkar Bhostekar",
    "member4": "Jash Doshi",
    "college": "Thadomal Shahani Engineering College, Mumbai"
  },
  {
    "name": "WEBSCALERS",
    "leader": "",
    "member1": "Prayag Bhosle",
    "member2": "Pratham Pawale",
    "member3": "Chinmay B",
    "member4": "Upendra Taral",
    "college": "AISSMS IOIT , Pune"
  },
  {
    "name": "lazy loading",
    "leader": "",
    "member1": "Anurag Kumar",
    "member2": "Suraj Sahu",
    "member3": "Rohit Kumar",
    "member4": "Anand Tharad",
    "college": "ITER SOA"
  },
  {
    "name": "stackunderflow",
    "leader": "",
    "member1": "Kristal Dsouza",
    "member2": "Andre Roy",
    "member3": "Aayudh Bhattacharya",
    "member4": "Ria Serrao",
    "college": "PES university , bangalore"
  },
  {
    "name": "ELVA",
    "leader": "",
    "member1": "Eleen Verma",
    "member2": "Vaibhav Singh",
    "member3": "",
    "member4": "",
    "college": "SRM university"
  },
  {
    "name": "C.O.D.E",
    "leader": "",
    "member1": "Aman Gupta",
    "member2": "Prarthana Agrawal",
    "member3": "Shashank Kumar",
    "member4": "",
    "college": "GL Bajaj Institute of Technology and Management"
  },
  {
    "name": "Bankai",
    "leader": "",
    "member1": "Azzan Mohiuddin",
    "member2": "Nagesh Kharat",
    "member3": "Monson Verghese",
    "member4": "Piyush Mahajan",
    "college": "Mahatma Ghandi Mission's College of Engineering"
  },
  {
    "name": "Navya",
    "leader": "",
    "member1": "Hari Acharya",
    "member2": "Riya Kushwaha",
    "member3": "Priyanshu Kumar Pal",
    "member4": "Shrey Raj",
    "college": "United institute of Technology"
  },
  {
    "name": "Billo bug-eh billiyaan",
    "leader": "",
    "member1": "Siddant Arvind",
    "member2": "Dhruv Baheti",
    "member3": "",
    "member4": "",
    "college": "VIT vellore"
  },
  {
    "name": "localhost:3000",
    "leader": "",
    "member1": "Adarsh Jena",
    "member2": "Hardik Thakre",
    "member3": "Vishal Kesharwani",
    "member4": "Siddhant Patil",
    "college": "GEC Nagpur"
  },
  {
    "name": "Immersive Reality",
    "leader": "",
    "member1": "Mohit Sarawgi",
    "member2": "Shubham Thakur",
    "member3": "Rounak Bedi",
    "member4": "",
    "college": "Gyan Ganga Insitute ,Jabalpur"
  },
  {
    "name": "BotBrigade",
    "leader": "",
    "member1": "Gurudayal Maurya",
    "member2": "Abhishek Sharma",
    "member3": "Harsh Chauhan",
    "member4": "Anurag Kumar",
    "college": "Kamla Nehru Institute of Technology, Sultanpur"
  },
  {
    "name": "Minions",
    "leader": "",
    "member1": "Vandit Tyagi",
    "member2": "Sai Prabhat Gubbala",
    "member3": "Gautam Sarawagi",
    "member4": "Ashutosh Kumar",
    "college": "IIIT NayaRaipur"
  },
  {
    "name": "Synergy",
    "leader": "",
    "member1": "Rishita Ghosh",
    "member2": "Cm Sushmita",
    "member3": "Bhagyalaxmi A",
    "member4": "Aman Netam",
    "college": "GEC Raipur"
  },
  {
    "name": "JalJeera",
    "leader": "",
    "member1": "Aaditya Tripathi",
    "member2": "Ganesh Prajapati",
    "member3": "Ojas Dubey",
    "member4": "Anshul Gupta",
    "college": "IIIT NayaRaipur"
  },
  {
    "name": "Coding Wizards",
    "leader": "",
    "member1": "Vipin Kumar Gautam",
    "member2": "Yash Singh",
    "member3": "Raja Singh",
    "member4": "Pratham Sahu",
    "college": "BIT Durg"
  },
  {
    "name": "SuperNova",
    "leader": "",
    "member1": "Chetan Kumar Sahu",
    "member2": "Meraj Meer",
    "member3": "Vamsi Krishna Allada",
    "member4": "Saniya Sheikh",
    "college": "Amity Raipur"
  },
  {
    "name": "reboot rebels",
    "leader": "",
    "member1": "Pratham Gandhi",
    "member2": "Rida Khan",
    "member3": "Piyush Bisen",
    "member4": "Shriyansh Gaur",
    "college": "NIT Raipur"
  },
  {
    "name": "The Cosmos",
    "leader": "",
    "member1": "Shivam Gupta",
    "member2": "Harsh Agrawal",
    "member3": "Anadi Agrawal",
    "member4": "Raj Motwani",
    "college": "NIT Raipur"
  },
  {
    "name": "Clashers",
    "leader": "",
    "member1": "Somil Puri",
    "member2": "Vaidik Pandey",
    "member3": "Rajvardhan Singh",
    "member4": "Subham Soni",
    "college": "NIT Raipur"
  },
  {
    "name": "ctrlshifthack",
    "leader": "",
    "member1": "Aman Jain",
    "member2": "K Venkat Nag Sai",
    "member3": "Chinmaya Kumar Das",
    "member4": "Aarif Khan",
    "college": "NIT Raipur"
  },
  {
    "name": "Super Talented Dorks",
    "leader": "",
    "member1": "Anurag Deo",
    "member2": "Ishaan Adarsh",
    "member3": "Abhinav Srinivas",
    "member4": "Pratyush Nagpal",
    "college": "NIT Raipur"
  },
  {
    "name": "GRINGOTTS",
    "leader": "",
    "member1": "Prince Tripathi",
    "member2": "Pranjal Naman",
    "member3": "Piyush Kumar",
    "member4": "Khushi Bansal",
    "college": "NIT Raipur"
  },
  {
    "name": "Error Busters",
    "leader": "",
    "member1": "Vinay Velamuri",
    "member2": "Yash Gupta",
    "member3": "Pranay Agrawal",
    "member4": "",
    "college": "NIT Raipur"
  },
  {
    "name": "Innov8ors",
    "leader": "",
    "member1": "Prateek Singh",
    "member2": "Apoorva Sahu",
    "member3": "Nihit Gupta",
    "member4": "Arnav Sharma",
    "college": "NIT Raipur"
  },
  {
    "name": "Accio Devs",
    "leader": "",
    "member1": "Chirag Garg",
    "member2": "Harsh Pastor",
    "member3": "Praveen Chandra Patro",
    "member4": "Ayush Shukla",
    "college": "NIT Raipur"
  },
  {
    "name": "Koder Kons",
    "leader": "",
    "member1": "Geeta",
    "member2": "Utsab Samadder",
    "member3": "Ankit Lakra",
    "member4": "Govind Purty",
    "college": "NIT Raipur"
  },
  {
    "name": "Visionaries United",
    "leader": "",
    "member1": "Aviral Patel",
    "member2": "Ayush Bhavsar",
    "member3": "Satya Jena",
    "member4": "B Deewakar Rao",
    "college": "NIT Raipur"
  },
  {
    "name": "Mavericks",
    "leader": "",
    "member1": "Sagar Gupta",
    "member2": "Chitransh Agrawal",
    "member3": "Tanishq Jalandra",
    "member4": "Murtaza Narwarwala",
    "college": "NIT Raipur"
  },
  {
    "name": "Ctrl + Shift + Decode",
    "leader": "",
    "member1": "Sudhanshu Raj",
    "member2": "Siddhant Tomar",
    "member3": "Sarvagya Jain",
    "member4": "Shubham Patel",
    "college": "NIT Raipur"
  },
  {
    "name": "Toxic Breeze",
    "leader": "",
    "member1": "Adarsh Sahu",
    "member2": "Shrey Shukla",
    "member3": "Sumit Soni",
    "member4": "",
    "college": "NIT Raipur"
  },
  {
    "name": "Iterators",
    "leader": "",
    "member1": "Ujjwal Agrawal",
    "member2": "Mayank Sahu",
    "member3": "Yoshita Sedani",
    "member4": "Sujal Chahande",
    "college": "NIT Raipur"
  }
];

export default shortlistedTeams;
