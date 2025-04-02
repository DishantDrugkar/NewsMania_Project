const newsPolls = [
    {
      pollQuestion: "Which two teams are playing in the IPL match today in Bengaluru?",
      options: ["RCB vs CSK", "MI vs KKR", "RCB vs GT", "LSG vs PBKS"],
      correctAnswer: "RCB vs GT"
    },
    {
      pollQuestion: "Who was reprimanded by the BCCI for a send-off in the LSG vs PBKS match?",
      options: ["KL Rahul", "Rishabh Pant", "Digvesh Rathi", "Shreyas Iyer"],
      correctAnswer: "Digvesh Rathi"
    },
    {
      pollQuestion: "Which Indian women's hockey player recently announced her retirement?",
      options: ["Rani Rampal", "Savita Punia", "Vandana Katariya", "Deepika Thakur"],
      correctAnswer: "Vandana Katariya"
    },
    {
      pollQuestion: "In which city will the Hero Asia Cup Hockey 2025 be held in August?",
      options: ["New Delhi", "Mumbai", "Rajgir", "Kolkata"],
      correctAnswer: "Rajgir"
    },
    {
      pollQuestion: "Who has stepped down as the Test captain of Cricket West Indies?",
      options: ["Jason Holder", "Kraigg Brathwaite", "Nicholas Pooran", "Shai Hope"],
      correctAnswer: "Kraigg Brathwaite"
    },
    {
      pollQuestion: "What is the focus of World Autism Awareness Day, observed today?",
      options: ["Promoting physical fitness", "Increasing understanding and acceptance of autism", "Raising awareness about environmental issues", "Highlighting the importance of fact-checking"],
      correctAnswer: "Increasing understanding and acceptance of autism"
    },
    {
      pollQuestion: "What is the aim of International Fact-Checking Day, also observed today?",
      options: ["Celebrating artistic expression", "Promoting healthy eating habits", "Highlighting the dangers of landmines", "Promoting the importance of verifying information"],
      correctAnswer: "Promoting the importance of verifying information"
    },
    {
      pollQuestion: "Which country is reportedly planning to remove three million Afghans this year?",
      options: ["Iran", "Pakistan", "Tajikistan", "Uzbekistan"],
      correctAnswer: "Pakistan"
    },
    {
      pollQuestion: "What significant tariff announcement is expected from the US President today, dubbed 'Liberation Day'?",
      options: ["New healthcare reforms", "Substantial income tax cuts", "Reciprocal tariffs on nations with trade ties to the US", "Relaxation of environmental regulations"],
      correctAnswer: "Reciprocal tariffs on nations with trade ties to the US"
    },
    {
      pollQuestion: "Which major tech company unveiled new AI security agents to combat cyber threats this month?",
      options: ["Google", "Microsoft", "Apple", "Amazon"],
      correctAnswer: "Microsoft"
    },
    {
      pollQuestion: "What key feature is included in the Windows 11 April feature update, focusing on how users interact with their computers?",
      options: ["Enhanced gaming performance", "Improved battery life", "AI-powered semantic search", "Revamped user interface"],
      correctAnswer: "AI-powered semantic search"
    },
    {
      pollQuestion: "Which technology is expected to allow computers to process information exponentially faster than classical computers for specific tasks?",
      options: ["5G Expansion", "Quantum Computing", "Blockchain", "Virtual Reality"],
      correctAnswer: "Quantum Computing"
    },
    {
      pollQuestion: "What is the primary goal of 'Climate Technology' which is expected to be key in 2025?",
      options: ["Improving internet speeds", "Developing new entertainment platforms", "Reducing or reversing human-caused environmental damage", "Advancing space exploration"],
      correctAnswer: "Reducing or reversing human-caused environmental damage"
    },
    {
      pollQuestion: "What type of AI refers to software programs designed to make decisions and take actions autonomously to achieve specific objectives?",
      options: ["Generative AI", "Agentic AI", "Hybrid AI", "Spatial AI"],
      correctAnswer: "Agentic AI"
    },
    {
      pollQuestion: "Which technology creates virtual replicas of physical systems and is gaining traction in industries like manufacturing and healthcare?",
      options: ["Extended Reality", "Digital Twins", "Neuromorphic Computing", "Synthetic Media"],
      correctAnswer: "Digital Twins"
    },
    {
      pollQuestion: "In today's IPL match between RCB and GT, which team is coming into the game unbeaten so far in the tournament?",
      options: ["Gujarat Titans", "Royal Challengers Bengaluru", "Both teams are unbeaten", "Neither team is unbeaten"],
      correctAnswer: "Royal Challengers Bengaluru"
    },
    {
      pollQuestion: "What is the estimated annual revenue that the US President's new tariffs could potentially generate?",
      options: ["$100 billion", "$300 billion", "$600 billion", "$1 trillion"],
      correctAnswer: "$600 billion"
    },
    {
      pollQuestion: "Which country has signed MoUs with India for 10 education, health, and cultural development projects?",
      options: ["Bangladesh", "Nepal", "Bhutan", "Sri Lanka"],
      correctAnswer: "Nepal"
    },
    {
      pollQuestion: "What is the name of Microsoft's AI-powered security platform that received an expansion with new AI agents?",
      options: ["Azure Sentinel", "Defender 365", "Security Copilot", "Intune"],
      correctAnswer: "Security Copilot"
    },
    {
      pollQuestion: "The Windows 11 April feature update's semantic search will initially be limited to which type of PCs?",
      options: ["Gaming PCs", "High-end workstations", "Windows on Snapdragon PCs", "Budget laptops"],
      correctAnswer: "Windows on Snapdragon PCs"
    },
    {
      pollQuestion: "What is the expected market size of quantum computing by 2040, according to Qureca?",
      options: ["$10.6 billion", "$53 billion", "$106 billion", "$212 billion"],
      correctAnswer: "$106 billion"
    },
    {
      pollQuestion: "Which field is expected to be revolutionized by quantum computing, particularly in cracking currently secure codes?",
      options: ["Medicine", "Cryptography", "Finance", "Transportation"],
      correctAnswer: "Cryptography"
    },
    {
      pollQuestion: "What is a key focus of technological advancements in 2025, alongside user experience and operational efficiency?",
      options: ["Space exploration", "Decentralization", "Sustainability", "Virtualization"],
      correctAnswer: "Sustainability"
    },
    {
      pollQuestion: "Which technology combines various computing technologies like CPU, GPU, and quantum systems to solve complex problems?",
      options: ["Cloud Computing", "Edge Computing", "Hybrid Computing", "Parallel Computing"],
      correctAnswer: "Hybrid Computing"
    },
    {
      pollQuestion: "What is the anticipated growth of global biometric adoption annually by 2025?",
      options: ["5%", "10%", "20%", "30%"],
      correctAnswer: "20%"
    },
    {
      pollQuestion: "Which company's latest quantum chip, Condor, is expected to have over 1,000 qubits by early 2025?",
      options: ["Microsoft", "Google", "IBM", "Intel"],
      correctAnswer: "IBM"
    },
    {
      pollQuestion: "What is the potential annual addition to the global economy by generative AI, as highlighted in a McKinsey report from August 2024?",
      options: ["$1.1 trillion", "$2.2 trillion", "$4.4 trillion", "$8.8 trillion"],
      correctAnswer: "$4.4 trillion"
    },
    {
      pollQuestion: "What is the estimated percentage of vehicles sold in 2025 that will feature Level 4 autonomy?",
      options: ["5%", "10%", "15%", "20%"],
      correctAnswer: "10%"
    },
    {
      pollQuestion: "What is the predicted market size for digital twins by 2025, according to Deloitte?",
      options: ["$12 billion", "$24 billion", "$48 billion", "$96 billion"],
      correctAnswer: "$48 billion"
    },
    {
      pollQuestion: "Which technology aims to reduce latency and enhance real-time processing by bringing data computation closer to the source?",
      options: ["Cloud Computing", "Quantum Computing", "Edge Computing", "Fog Computing"],
      correctAnswer: "Edge Computing"
    },
    {
      pollQuestion: "What is the expected speed increase of 6G compared to 5G?",
      options: ["Up to 10 times faster", "Up to 25 times faster", "Up to 50 times faster", "Up to 100 times faster"],
      correctAnswer: "Up to 100 times faster"
    },
    {
      pollQuestion: "Which technology is being applied in areas like cryptography and drug discovery due to its ability to speed up complex simulations?",
      options: ["Artificial Intelligence", "Machine Learning", "Quantum Computing", "Big Data Analytics"],
      correctAnswer: "Quantum Computing"
    },
    {
      pollQuestion: "What is the focus of Prevention of Blindness Week, which started on April 1st?",
      options: ["Promoting environmental awareness", "Raising awareness about eye health and preventing vision loss", "Celebrating cultural heritage", "Encouraging technological innovation"],
      correctAnswer: "Raising awareness about eye health and preventing vision loss"
    },
    {
      pollQuestion: "Which day, celebrated on April 6th, aims to recognize the role of sport in society and its power to foster peace and development?",
      options: ["World Health Day", "International Day of Sport for Development and Peace", "World Heritage Day", "Earth Day"],
      correctAnswer: "International Day of Sport for Development and Peace"
    },
    {
      pollQuestion: "World Health Day is observed annually on which date?",
      options: ["April 2nd", "April 7th", "April 15th", "April 22nd"],
      correctAnswer: "April 7th"
    },
    {
      pollQuestion: "Which Hindu festival, celebrating the birth of Lord Rama, falls in April?",
      options: ["Diwali", "Holi", "Rama Navami", "Navaratri"],
      correctAnswer: "Rama Navami"
    },
    {
      pollQuestion: "World Heritage Day is observed on April 18th to raise awareness about the importance of protecting what?",
      options: ["Endangered species", "Historical monuments and cultural sites", "Clean water resources", "The ozone layer"],
      correctAnswer: "Historical monuments and cultural sites"
    },
    {
      pollQuestion: "Earth Day is celebrated globally on April 22nd to support what cause?",
      options: ["Promoting space exploration", "Raising awareness about and action for environmental protection", "Celebrating advancements in technology", "Fostering international trade relations"],
      correctAnswer: "Raising awareness about and action for environmental protection"
    },
    {
      pollQuestion: "World Book and Copyright Day is observed on April 23rd by UNESCO to promote what?",
      options: ["The importance of physical fitness", "Reading, publishing, and copyright", "Awareness about mental health", "The benefits of space travel"],
      correctAnswer: "Reading, publishing, and copyright"
    },
    {
      pollQuestion: "National Panchayati Raj Day is celebrated in India on April 24th to commemorate what?",
      options: ["The adoption of the Constitution", "The establishment of the first Parliament", "The passing of the 73rd Constitutional Amendment Act related to Panchayati Raj", "India's independence day"],
      correctAnswer: "The passing of the 73rd Constitutional Amendment Act related to Panchayati Raj"
    },
    {
      pollQuestion: "World Malaria Day is observed annually on April 25th to highlight the need for continuous investment and sustained political commitment for the prevention and control of what disease?",
      options: ["Tuberculosis", "HIV/AIDS", "Malaria", "Diabetes"],
      correctAnswer: "Malaria"
    },
    {
      pollQuestion: "World Intellectual Property Day is observed on April 26th to raise awareness about the role of intellectual property rights in encouraging what?",
      options: ["Physical activity", "Environmental conservation", "Innovation and creativity", "International diplomacy"],
      correctAnswer: "Innovation and creativity"
    },
    {
      pollQuestion: "International Dance Day is celebrated on April 29th to promote the art form across the world. Who initiated this day?",
      options: ["UNESCO", "The United Nations", "The International Theatre Institute (ITI)", "The World Dance Alliance"],
      correctAnswer: "The International Theatre Institute (ITI)"
    },
    {
      pollQuestion: "International Jazz Day is celebrated on April 30th to highlight jazz and its diplomatic role of uniting people in all corners of the globe. Who officially recognized this day?",
      options: ["The Grammy Awards", "The Library of Congress", "UNESCO", "The Smithsonian Institution"],
      correctAnswer: "UNESCO"
    },
    {
      pollQuestion: "Which country is reportedly imposing a 100% tariff on agricultural products, leading to concerns from the White House about reciprocity?",
      options: ["China", "India", "Brazil", "European Union"],
      correctAnswer: "India"
    },
    {
      pollQuestion: "What is the name of the AI model developed by Google that now helps developers refactor code and identify bugs?",
      options: ["Bard", "LaMDA", "Gemini", "TensorFlow"],
      correctAnswer: "Gemini"
    },
    {
      pollQuestion: "Which platforms are now using AI to auto-generate workflows and suggest business logic in low-code/no-code applications?",
      options: ["AWS CodeBuild and Jenkins", "Microsoft Power Apps and Salesforce Einstein", "Google App Engine and Firebase", "Oracle APEX and Zoho Creator"],
      correctAnswer: "Microsoft Power Apps and Salesforce Einstein"
    },
    {
      pollQuestion: "What is the term for IT systems that can automatically detect, diagnose, and resolve performance issues without human intervention?",
      options: ["Self-monitoring systems", "Autonomous networks", "Self-healing IT systems", "Predictive maintenance platforms"],
      correctAnswer: "Self-healing IT systems"
    },
    {
      pollQuestion: "Which company's AI security agents include a phishing triage agent that can autonomously handle routine phishing alerts?",
      options: ["Symantec", "McAfee", "Microsoft", "CrowdStrike"],
      correctAnswer: "Microsoft"
    },
    {
      pollQuestion: "The Windows 11 April feature update's semantic search allows users to search for files using what type of language?",
      options: ["Technical jargon", "Programming code", "Exact keywords only", "Natural language"],
      correctAnswer: "Natural language"
    },
    {
      pollQuestion: "What is the name of IBM's latest quantum chip that is expected to have over 1,000 qubits?",
      options: ["Sycamore", "Eagle", "Hummingbird", "Condor"],
      correctAnswer: "Condor"
    },
    {
      pollQuestion: "Which of these is NOT listed as a top 25 emerging technology in 2025?",
      options: ["Generative AI", "Quantum Computing", "Holographic Displays", "Autonomous Vehicles"],
      correctAnswer: "Holographic Displays"
    },
    {
      pollQuestion: "What is the primary application of blockchain technology beyond cryptocurrency?",
      options: ["Advanced robotics", "Decentralized finance (DeFi) and supply chain management", "Enhanced virtual reality experiences", "Improved weather forecasting"],
      correctAnswer: "Decentralized finance (DeFi) and supply chain management"
    },
    {
      pollQuestion: "Which technology is predicted to have a market growth to $87 billion by 2025, as IoT devices proliferate?",
      options: ["Cloud Computing", "Big Data Analytics", "Edge Computing", "Cybersecurity"],
      correctAnswer: "Edge Computing"
    },
    {
      pollQuestion: "What is the focus of AI in cybersecurity in 2025?",
      options: ["Creating new types of malware", "Developing more realistic video games", "Detecting and preventing cyberattacks", "Automating social media content"],
      correctAnswer: "Detecting and preventing cyberattacks"
    },
    {
      pollQuestion: "Which field is expected to heavily rely on digital twins by 2025 for real-time monitoring and predictive analysis?",
      options: ["Agriculture", "Manufacturing, healthcare, and urban planning", "Retail", "Education"],
      correctAnswer: "Manufacturing, healthcare, and urban planning"
    },
    {
      pollQuestion: "What is the potential impact of the US President's 'Liberation Day' tariffs on global supply chains?",
      options: ["They are expected to strengthen global supply chains", "They are predicted to have no significant impact", "Experts warn they could disrupt global supply chains", "They are aimed at promoting local sourcing only"],
      correctAnswer: "Experts warn they could disrupt global supply chains"
    },
    {
      pollQuestion: "Which of the following is a potential consequence of the US reciprocal tariffs, according to economists?",
      options: ["Decreased consumer prices", "Increased global trade volume", "Potential trigger of a full-blown global trade war", "Reduced government revenue"],
      correctAnswer: "Potential trigger of a full-blown global trade war"
    }
]

export default newsPolls;