const hospitals =  [
    {
      id: 1,
      name: 'Indiana Hospital & Heart Institute (IHHI)',
      history: "Established in 2012, specializing in multi-specialty healthcare services with a focus on emergency care and advanced medical technology.",
      services: '24/7 emergency services, Cardiology,Cardiothoracic Surgery,Paediatrics & Neonatology,Paediatric Surgery',
      doctors: [
        { id: 1, name: 'DR. NAVEEN P GOPAL', degree: 'MBBS, MS (General Surgery) Mumbai, FMAS, FIAGES', specialization: 'Consultant General & Laparoscopic Surgeon Laser Proctologist', timings: '9 AM - 5 PM' },
        { id: 2, name: 'DR. AHMED JALWA C', degree: 'MBBS, MS (ENT), DNB (ORL)', specialization: 'Consultant ENT Surgeon', timings: '10 AM - 6 PM' },
        { id: 3, name: 'DR. GARRY VALERIAN PAIS', degree: 'MBBS, MD (General Medicine), DNB (Cardiology)', specialization: 'Consultant Interventional Cardiologist', timings: '11 AM - 7 PM' },
        { id: 4, name: 'Dr. Sukhen N Shetty', degree: 'M.B.B.S., M.D. (Anesthesiology), DNB (anaesthesiology), FCA, FICCC, FICA, FIACTA, FPCA', specialization: 'Consultant Cardiac Anesthesiologist', timings: '8 AM - 4 PM' },
        { id: 5, name: 'Dr. Anwitha Varmudy', degree: 'MBBS(Gold Medalist), MD(Gold Medalist), DM(Nephrology)', specialization: 'Consultant Nephrologist', timings: '9 AM - 5 PM' },
        {id: 6,
        name: 'Dr. Shyam Krishna Ashok',
        degree: 'MBBS, MS (General Surgery), MCh (CTVS)',
        specialization: 'Director and Head of Cardio-thoracic and Vascular Surgery',
        timings: '10 AM - 6 PM'
      },
      {
        id: 7,
        name: 'Dr. Shravan R Shanbhag',
        degree: 'MBBS, MS (General Surgery), DrNB (Urology), Diploma in Laparoscopy',
        specialization: 'Consultant Urologist',
        timings: '11 AM - 7 PM'
      },
      {
        id: 8,
        name: 'Dr. Yusuf A Kumble',
        degree: 'MBBS, MD, DM (Cardiology - AIIMS), (DNB Cardio), FSCAI, FESC, FACC (USA)',
        specialization: 'Chief Interventional Cardiologist, Managing Director - IHHI Ltd.',
        timings: '8 AM - 4 PM'
      },
      {
        id: 9,
        name: 'Dr. M.K. Moosa Kunhi',
        degree: 'MBBS, MS, M.Ch, F.I.A.C.S',
        specialization: 'Consultant Cardiovascular Thoracic Surgeon (visiting)',
        timings: '1 PM - 9 PM'
      },
      {
        id: 10,
        name: 'Dr. Don Gregory Mascarenhas',
        degree: 'MBBS, MD, DNB',
        specialization: 'Consultant Pulmonologist & Allergist',
        timings: '9 AM - 5 PM'
      },
      {
        id: 11,
        name: 'Dr. Ajay Kumar',
        degree: 'MBBS, MS, MCh (Surgical Oncology)',
        specialization: 'Consultant Surgical Oncologist',
        timings: '10 AM - 6 PM'
      },
      {
        id: 12,
        name: 'Dr. Sandhya Rani PN',
        degree: 'MD (Medicine), DM (Cardiology)',
        specialization: 'Consultant Cardiologist',
        timings: '8 AM - 4 PM'
      },
      {
        id: 13,
        name: 'Dr. Prashanth Vaijynath',
        degree: 'MBBS, MS (PGI), MCh (CVTS - AIIMS), FACS, FCS',
        specialization: 'Senior Consultant Cardiothoracic, Vascular & Heart Transplant Surgeon (Visiting Consultant)',
        timings: '1 PM - 9 PM'
      },
      {
        id: 14,
        name: 'Dr. ZK Misri',
        degree: 'MBBS, MD (Med), DM (Neuro)',
        specialization: 'Professor & Sr. Consultant Neurologist',
        timings: '9 AM - 5 PM'
      },
      {
        id: 15,
        name: 'Dr. Smruthi',
        degree: 'MBBS, MS Ophthal IOL Fellow (Cataract)',
        specialization: 'Consultant Ophthalmologist',
        timings: '10 AM - 6 PM'
      },
      {
        id: 16,
        name: 'Dr. Meghana S Kumar',
        degree: 'BDS, MDS',
        specialization: 'Consultant Paediatric Dentist',
        timings: '11 AM - 7 PM'
      },
      {
        id: 17,
        name: 'Dr. Latha',
        degree: 'N/A',
        specialization: 'Cardiology Medical Officer',
        timings: '8 AM - 4 PM'
      },
      {
        id: 18,
        name: 'Prof. Dr. Ali Kumble',
        degree: 'MBBS, MD (Paediatrics)',
        specialization: 'Sr. Consultant & HOD (Paediatrics), Chairman - IHHI Ltd.',
        timings: '1 PM - 9 PM'
      },
      {
        id: 19,
        name: 'Dr. Abhishek K. Phadke',
        degree: 'MBBS, DNB (Paediatrics), FIAP (Neonatology)',
        specialization: 'Consultant Neonatologist',
        timings: '9 AM - 5 PM'
      },
      {
        id: 20,
        name: 'Dr. Vijaymahantesh S. Samalad',
        degree: 'MBBS, MS, MCh (Paediatric Surgery), PGIMER - Chandigarh Fellow in Paediatric Urology',
        specialization: 'Consultant Paediatric and Neonatal Surgeon and Paediatric Urologist',
        timings: '10 AM - 6 PM'
      },
      {
        id: 21,
        name: 'Dr. Arun Varghese',
        degree: 'MBBS, MD (Paediatrics) FPCC (Paediatric Critical Care)',
        specialization: 'Consultant - Paediatric Intensivist (Visiting Consultant)',
        timings: '11 AM - 7 PM'
      },
      {
        id: 22,
        name: 'Prof. Dr. Kochikar Ganesh Pai',
        degree: 'MBBS, MS, MCh (Paediatric Surgery), FICS, FICA (USA), FIAMS, FISPU',
        specialization: 'Senior Paediatric Surgeon & Paediatric Urologist (Visiting Consultant)',
        timings: '8 AM - 4 PM'
      },
      {
        id: 23,
        name: 'Dr. Safwan Ahmed',
        degree: 'MBBS, MD, DM (Neurology) (NIMHANS)',
        specialization: 'Consultant Neurologist (Visiting Consultant)',
        timings: '1 PM - 9 PM'
      },
      {
        id: 24,
        name: 'Dr. Sandeep Rai',
        degree: 'MBBS, MS, MCh (Paediatric Surgery)',
        specialization: 'Paediatric Surgeon (Visiting Consultant)',
        timings: '9 AM - 5 PM'
      },
      {
        id: 25,
        name: 'Dr. Ashraf Ahmad',
        degree: 'MBBS, MS, MCh (Paediatric Surgery)',
        specialization: 'Paediatric Surgeon (Visiting Consultant)',
        timings: '10 AM - 6 PM'
      },
            { id: 26, name: 'Dr. Elvis Rodrigues', degree: 'MBBS, MS (General Surgery), MCh (Neuro Surgery) NIMHANS', specialization: 'Sr. Consultant Neuro Surgeon', timings: '11 AM - 7 PM' },
            { id: 27, name: 'Dr. Pradeep K.J.', degree: 'MBBS, MD (General Medicine), DM (Nephrology)', specialization: 'Sr. Consultant Nephrologist & Kidney Transplant Physician', timings: '8 AM - 4 PM' },
            { id: 28, name: 'Dr. Apoorva Srijayadeva', degree: 'MBBS, DNB (Medicine), DNB (Medical Gastroenterology), FCCP', specialization: 'Sr. Consultant Interventional Gastroenterologist', timings: '1 PM - 9 PM' },
            { id: 29, name: 'Dr. Naveenchandra Alva', degree: 'MBBS, MS, D\'Ortho, MS (Ortho)', specialization: 'Sr. Consultant Orthopaedic Surgeon', timings: '9 AM - 5 PM' },
            { id: 30, name: 'Dr. Jalaluddeen MV', degree: 'MBBS, MS (Ortho), MCh (Ortho)', specialization: 'Sr. Consultant Orthopaedic Surgeon (Spine & Joint Replacement)', timings: '10 AM - 6 PM' },
            { id: 31, name: 'Dr. Ahmed Rizwan CM', degree: 'MBBS, MS (ORTHO), Mch (ORTHO), D\'ORTHO Fellow in Deformity Correction - Ilizarov, (Russia) Baltimore (USA), NRRA (China)', specialization: 'Consultant Orthopaedic Surgeon', timings: '11 AM - 7 PM' },
            { id: 32, name: 'Dr. Hashir Safwan U', degree: 'MBBS, MS (ORTHO), D\'ORTHO, A.O. SPINE FELLOW', specialization: 'Consultant Spine & Scoliosis Surgeon', timings: '9 AM - 5 PM' },
            { id: 33, name: 'Dr. Salfi P.K', degree: 'MBBS, MD (EMERGENCY MEDICINE), FICM', specialization: 'Consultant Emergency Medicine', timings: '8 AM - 4 PM' },
            { id: 34, name: 'Dr. Shamna Minaz', degree: 'MBBS, MEM', specialization: 'Consultant', timings: '9 AM - 5 PM' },
            
      ]
    },
  
    {
      id: 2,
      name: 'Father Muller Medical College Hospital Kankanady',
      history: ' established in 1991, specializes in providing comprehensive medical education and healthcare services across various specialties, including Medicine, Surgery, and Psychiatry.',
      services: 'wide range of services including emergency care, specialized treatments in cardiology, neurology, oncology, orthopedics, psychiatry, and comprehensive diagnostic and outpatient services.',
      doctors:
      [
        {id: 1, name: 'Dr. Roshan M', degree: 'MBBS MD MCh (Neuro Surgery)', specialization: 'Paediatrician', timings: 'N/A' },
        {id: 2, name: 'Dr. Harsharaj K', degree: 'MBBS DNB (Orthopedics)', specialization: 'Orthopaedic Doctor', timings: 'N/A' },
        {id: 3, name: 'Dr. Reshmina Chandni Clara DSouza', degree: 'MBBS MS', specialization: 'General Surgeon ', timings: '8:30 am - 12:30 pm' },
        {id: 4, name: 'Dr. Prajna Kumari ', degree: 'MBBS MS', specialization: 'Gynaecologist & Obstetrician', timings: '8:30 am - 5:00 pm' },
        {id: 5, name: 'Dr. Jnaneshwari Jayaram ', degree: 'MBBS MD MCh (Neuro Surgery)', specialization: 'General Surgeon', timings: 'N/A' },
        {id: 6, name: 'Dr. Spoorthi Ashok Pai', degree: 'MBBS MD', specialization: 'General Physician', timings: 'N/A' },
        {id: 7, name: 'Dr. Cimona D Souza', degree: 'MBBS MS', specialization: 'ENT Doctors', timings: 'N/A' },
        {id: 8, name: 'Dr. Blessy B Prabha ', degree: 'MBBS MD', specialization: 'ENT Doctors', timings: 'N/A' },
        {id: 9, name: 'Dr. Anoop Joseph ', degree: 'MBBS MD DNB', specialization: 'General Physician', timings: 'N/A' },
        {id: 10, name: 'Dr. Mohieb Mustak Ahamed', degree: 'MBBS MS', specialization: 'Orthopaedic Doctor', timings: 'N/A' }
      ]
    },
    {
      id: 3,
      name: "Yenepoya Specialty Hospital",
      history: "Established in 1995, Yenepoya Specialty Hospital is a leading multi-specialty facility located in Mangalore City, Karnataka, South India. It serves more than 300 patients daily and offers comprehensive healthcare services both locally and internationally.",
      services: "The hospital provides a wide range of services including emergency care, specialized treatments in cardiology, neurology, oncology, orthopedics, and psychiatry, as well as comprehensive diagnostic and outpatient services. It features advanced medical technology and infrastructure, including CT & MRI scanners, Digital X-Ray, Mammogram, Ultrasound, Colour Doppler, Cath Lab, and Dialysis facilities.",
      doctors: [
        {
          id: 1,
          name: "Dr. Muhammad Thahir",
          degree: "MBBS, MS (ORL)",
          specialization: "Consultant ENT Surgeon",
          timings: "N/A"
        },
        {
          id: 2,
          name: "Dr. Deepak Rai",
          degree: "MBBS, MS (Orthopaedics)",
          specialization: "Robotic Joint Replacement & Arthroscopy Surgeon",
          timings: "N/A"
        },
        {
          id: 3,
          name: "Dr. Ashok Pandit",
          degree: "MBBS, MS, Mch",
          specialization: "Senior Consultant Urologist",
          timings: "N/A"
        },
        {
          id: 4,
          name: "Dr. M. Vijaya Kumar",
          degree: "MBBS, DNB, MCh (Surgical Oncol)",
          specialization: "Chief Surgical Oncologist",
          timings: "N/A"
        },
        {
          id: 5,
          name: "Dr. Krishna Shetty A",
          degree: "MD, DNB (Cardiology)",
          specialization: "Consultant Interventional Cardiologist",
          timings: "N/A"
        },
        {
          id: 6,
          name: "Dr. V.P.A. Shameem Hafeez",
          degree: "MBBS, MD (Obst & Gyneac)",
          specialization: "Obst & Gyneacologist",
          timings: "N/A"
        },
        {
          id: 7,
          name: "Dr. K Sakthivel",
          degree: "MBBS, MS, DNB, MCh (Cardiothoracic)",
          specialization: "Cardio-Thoracic Surgeon",
          timings: "N/A"
        },
        {
          id: 8,
          name: "Dr. Mohandas B. S",
          degree: "MBBS, MD, DM (Cardiac Anaesthesia)",
          specialization: "Cardiac Anaesthetist",
          timings: "N/A"
        },
        {
          id: 9,
          name: "Dr. Ganesh Kamath",
          degree: "MBBS, MS (Gen. Surg), MCh (Cardiothoracic & Vascular Surgery)",
          specialization: "Cardiothoracic & Vascular Surgeon",
          timings: "N/A"
        },
        {
          id: 10,
          name: "Dr. Srijith Padmanabh",
          degree: "MS Ortho, DNB Ortho, AO Spine Fellow",
          specialization: "Orthopaedic Spine Surgeon",
          timings: "N/A"
        },
        {
          id: 11,
          name: "Dr. Mariam Anjum Ifthikar",
          degree: "M.B.B.S., M.S.(OBG) FMAS, PGDCR. ",
          specialization: "Fellow In Gynaecologic Oncology (Kmio) Mch Gynaecologic Oncology",
          timings: "N/A"
        },
        {
          id: 12,
          name: "Dr. B. P Shelley",
          degree: "MBBS, MD (Med), DM (Neuro), FRCP (Edin)",
          specialization: "Senior Consultant in Neurology",
          timings: "N/A"
        }
      ]
    } ,
    {
      id: 4,
      name: 'Kmc Hospital',
      history: ' Kasturba Medical College (KMC) was established in 1953 in Manipal, Karnataka. It is one of Indias premier medical institutions, known for its high standards in medical education and healthcare services.',
      services: ' offers comprehensive healthcare services including general medicine, surgery, pediatrics, obstetrics and gynecology, emergency care, diagnostics, cardiology, orthopedics, neurology, oncology, and physiotherapy',
      doctors:
      [
        {id: 1, name: 'Dr. M.N. Bhat ', degree: 'DM (Cardiology)- POSTGRADUATE INSTITUTE OF MEDICAL EDUCATION AND RESEARCH, CHANDIGARH- 2004', specialization: 'Cardiologist', timings: '9:00 am - 12:00 pm' },
        {id: 2, name: 'Dr. Z K Misri ', degree: 'DM (Neurology)- Kasturba Medical College- 2003', specialization: 'Neurosurgeon', timings: '9:00 am - 10:30 am' },
        {id: 3, name: 'Dr. Padmanabha Kamath', degree: 'MD (General Medicine)- Manipal Academy Of Higher Education, Manipal, India- 1999', specialization: 'Cardiologists', timings: '10:00 am - 3:00 pm' },
        {id: 4, name: 'Dr. Soundarya ', degree: 'MBBS', specialization: 'Pediatrician, Pulmonologist', timings: '9:00 am - 5:00 pm' },
        {id: 5, name: 'Dr. Deepak Shedde', degree: 'MBBS- Karnataka University, India- 1994', specialization: 'Gynecologist And Obstetrician', timings: '9:00 am - 10:30 am' },
        {id: 6, name: 'Dr. Spoorthi Ashok Pai', degree: 'MBBS MD', specialization: 'General Physician', timings: 'N/A' },
        {id: 7, name: 'Dr. Cimona D Souza', degree: 'MBBS MS', specialization: 'ENT Doctors', timings: 'N/A' },
        {id: 8, name: 'Dr. Blessy B Prabha ', degree: 'MBBS MD', specialization: 'ENT Doctors', timings: 'N/A' },
        {id: 9, name: 'Dr. Anoop Joseph ', degree: 'MBBS MD DNB', specialization: 'General Physician', timings: 'N/A' },
        {id: 10, name: 'Dr. Mohieb Mustak Ahamed', degree: 'MBBS MS', specialization: 'Orthopaedic Doctor', timings: 'N/A' }
      ]
      
    },
    {
      id: 5,
      name: "A J Hospital & Research Centre",
      history: "A.J Hospital & Research Centre is one of the foremost tertiary hospitals in India. Established in 2001, the hospital provides state-of-the-art healthcare treatment and facilities across 30 major medical disciplines. It is a unit of the Laxmi Memorial Educational Trust, founded by Dr. A.J. Shetty, a reputed entrepreneur, educationist, and philanthropist.",
      services: "The hospital offers a wide range of services including emergency care, specialized treatments in cardiology, neurology, oncology, orthopedics, psychiatry, and comprehensive diagnostic and outpatient services.",
      doctors: [
        { id: 1, name: "Dr. Jayashankar Marla", degree: "DNB", specialization: "Cardiac Thoracic and Vascular Surgery", timings: "N/A" },
        { id: 2, name: "Dr. Sambhram Shetty H S", degree: "MS, MCh", specialization: "Cardiac Thoracic and Vascular Surgery", timings: "N/A" },
        { id: 3, name: "Dr. Manjunath B V", degree: "MD, DM, FCAI", specialization: "Cardiology", timings: "N/A" },
        { id: 4, name: "Dr. Purushotham R", degree: "MD, DM", specialization: "Cardiology", timings: "N/A" },
        { id: 5, name: "Dr. Praveen J Shetty", degree: "MD, DM, DNB, FIC", specialization: "Cardiology", timings: "N/A" },
        { id: 6, name: "Dr. Sudhesh Rao", degree: "DA, FCCS, FCCM", specialization: "Critical Care Medicine", timings: "N/A"},
        { id: 7, name: "Dr. Dotton", degree: "MD", specialization: "Critical Care Medicine", timings: "N/A" },
        { id: 8, name: "Dr. Mohammed Imdad", degree: "MD", specialization: "Critical Care Medicine", timings: "N/A" },
        { id: 9, name: "Dr. Rohith Y", degree: "DNB", specialization: "Emergency Medicine", timings: "N/A" },
        { id: 10, name: "Dr. Sanjay Kumar B", degree: "MBBS, FEM", specialization: "Emergency Medicine", timings: "N/A" },
        { id: 11, name: "Dr. Noore Sana", degree: "DEM", specialization: "Emergency Medicine",timings: "N/A" },
        { id: 12, name: "Dr. Ganesh H K", degree: "MD, DM", specialization: "Endocrinology", timings: "N/A" },
        { id: 13, name: "Dr. Raghavendra Prasad K V", degree: "MD, DM", specialization: "Gastroenterology - Medical", timings: "N/A" },
        { id: 14, name: "Dr. Ashwin Alva", degree: "MS, DNB", specialization: "Gastroenterology - Surgical", timings: "N/A" },
        { id: 15, name: "Dr. Rakshith Kumar Shetty A B", degree: "M.Ch", specialization: "Neuro Surgery", timings: "N/A" },
        
      ]
    },
    {
      id: 6,
      name: 'K S Hegde Hospital ',
      history: 'K.S. Hegde Hospital, established in 1998 in Mangalore, is part of the Nitte Education Trust and has grown into a well-regarded medical institution, offering comprehensive healthcare services and serving as a teaching hospital for medical students.',
      services: 'K.S. Hegde Hospital offers a wide range of healthcare services, including specialized treatments, advanced diagnostics, surgical procedures, and comprehensive patient care across various medical disciplines.',
     doctors: [
        {id: 1, name: 'Dr. Suraj Hegde', degree: 'MBBS MD MCh', specialization: 'Urologist', timings: '9:00 am - 3:30 pm' },
        {id: 2, name: 'Dr. Lekha Pandit', degree: 'DM MD PHD', specialization: 'Neurologist', timings: 'N/A' },
        {id: 3, name: 'Dr.Aby Dany Varghese', degree: 'MBBS MS', specialization: 'Pediatrician ', timings: '8:30 am - 12:30 pm' },
        {id: 4, name: 'Dr. Pradeep Shenoy', degree: 'DM (Nephrology)', specialization: 'Nephrologist, Pulmonologist', timings: '8:30 am - 5:00 pm' },
        {id: 5, name: 'Dr. Shricharith Shetty  ', degree: 'MD (Dermatology)- Vijayanagara Institute Of Medical Sciences (VIMS), Bellary- 2012', specialization: 'Dermatologist,', timings: '4:30 pm - 8:30 pm' },
        {id: 6, name: 'Dr. Ivor D Souza ', degree: 'MBBS MD', specialization: 'General Physician, Pulmonologist', timings: 'N/A' },
        {id: 7, name: 'Dr. Shamaprakash K', degree: 'MBBS MS', specialization: 'General Physician, Pulmonologist', timings: 'N/A' },
        {id: 8, name: 'Dr. L N Samaga  ', degree: 'MBBS MD', specialization: 'Pulmonologist', timings: 'N/A' },
        {id: 9, name: 'Dr.Narendra Pai ', degree: 'MBBS MD DNB', specialization: 'Urologist, Pulmonologist', timings: 'N/A' },
        {id: 10, name: 'Dr. Ramyatha', degree: 'MBBS MS', specialization: 'Anesthesiologist, Pulmonologist', timings: 'N/A' }
      ]
    },
    {
      id: 7,
      name: 'Unity Hospital ',
      history: 'Unity Hospital in Mangalore was founded in 1978 and has since evolved into a well-established healthcare facility, known for its commitment to providing quality medical care and advanced treatments across various specialties.',
      services: 'Unity Hospital offers a comprehensive range of medical services, including specialized treatments, advanced diagnostics, emergency care, surgical procedures, and patient-focused healthcare across multiple specialties.',
      doctors: [
        {id: 1, name: 'Dr.Narenshetty ', degree: 'MBBS- K.S. Hegde Medical Academy, Mangalore- 2010', specialization: 'General Surgeon, Vascular Surgeon', timings: '9:55 am - 12:00 pm' },
        {id: 2, name: 'Dr.Paul Varghese', degree: 'MBBS MD DM', specialization: 'Cardiologist', timings: '9:30 am - 6:30 pm' },
        {id: 3, name: 'Dr.H Anchitha ', degree: 'MD (Dermatology , Venereology & Leprosy)', specialization: 'Dermatologist, Cosmetologist', timings: '8:30 am - 12:30 pm' },
        {id: 4, name: 'Dr. Manjunath Shenoy ', degree: 'MBBS MD', specialization: 'Dermatologist', timings: '8:30 am - 5:00 pm' },
        {id: 5, name: 'Dr.Shihab Hasan', degree: 'MD (Internal Medicine) 2012', specialization: 'Internal Medicine', timings: '4:30 pm - 8:30 pm' },
        {id: 6, name: 'Dr.Kishore Shetty', degree: 'MBBS MD', specialization: 'General Physician, Put', timings: 'N/A' },
        {id: 7, name: 'Dr. Shamaprakash K', degree: 'MBBS MS', specialization: 'General Physician, Pulmonologist', timings: 'N/A' },
        {id: 8, name: 'Dr. L N Samaga  ', degree: 'MBBS MD', specialization: 'Pulmonologist', timings: 'N/A' },
        {id: 9, name: 'Dr.Narendra Pai ', degree: 'MBBS MD DNB', specialization: 'Urologist, Pulmonologist', timings: 'N/A' },
        {id: 10, name: 'Dr. Ramyatha', degree: 'MBBS MS', specialization: 'Anesthesiologist, Pulmonologist', timings: 'N/A' }
      ]
    },
    {
      id: 8,
      name: 'Tejasvini Hospital',
      history: "Established in May 2004, SSIOT is a state-of-the-art specialty hospital located in Kadri, Mangalore City. With a 200-bed capacity, the hospital is renowned for its expertise in Orthopaedics and Trauma and provides high-quality medical treatment along with free concessional treatment to deserving patients. It is recognized by major health insurance companies and reputed private and public sector companies.",
      services: "SSIOT offers a comprehensive range of inpatient and outpatient services, including specialties in Orthopaedics, Neurosurgery, Vascular and Plastic Surgery, General Medicine, Paediatrics, and Neurology. The hospital is equipped with advanced facilities for trauma care, spine, joint replacement, and other orthopedic disorders, and provides a range of services irrespective of patients' economic status.",
      doctors:
      [
        {
          id: 1,
          name: "Prof. (Dr) M. Shantharam Shetty",
          degree: "M.S. (Ortho), FRCS, FICS, FACS",
          specialization: "Orthopaedic Surgeon, Chairman",
          timings: "Evening 6 PM onwards every day except Sunday"
        },
        {
          id: 2,
          name: "Dr. Bhaskaranand Kumar",
          degree: "M.S. (Ortho), D.Ortho",
          specialization: "Head of Hand and Microvascular Unit",
          timings: "Every 10 days once, 4 PM onwards"
        },
        {
          id: 3,
          name: "Dr. M. Ajith Kumara",
          degree: "M.S. (Ortho), D.Ortho, FICS, MCh (Ortho) Liverpool",
          specialization: "Arthroplasty and Pediatric Ortho",
          timings: "All days except Sunday and Wednesday, 12 Noon onwards"
        },
        {
          id: 4,
          name: "Dr. Shailesh Pai",
          degree: "M.B.B.S, DNB Ortho",
          specialization: "Trauma and Pelvi-Acetabular Surgeon",
          timings: "Monday and Thursday, 9 AM to 1 PM"
        },
        {
          id: 5,
          name: "Dr. Srinivas Narayana Moolya",
          degree: "M.S. Orthopaedics, FNB (Spine Surgery)",
          specialization: "Consultant Spine Surgeon",
          timings: "N/A"
        },
        {
          id: 6,
          name: "Dr. Sumanth M Nayak",
          degree: "MBBS, MS Ortho, FIASM",
          specialization: "Arthroscopy",
          timings: "N/A"
        },
        {
          id: 7,
          name: "Dr. Mohammed Faheem Kotekar",
          degree: "M.B.B.S, DNB Ortho",
          specialization: "Pediatric Orthopaedic Surgeon",
          timings: "N/A"
        },
        {
          id: 8,
          name: "Dr. Vijay Kumar",
          degree: "M.B.B.S, MD Medicine",
          specialization: "Consultant Physician",
          timings: "All days except Sunday"
        },
        {
          id: 9,
          name: "Ambika",
          degree: "DNB (Psych)",
          specialization: "Consultant Psychiatrist",
          timings: "N/A"
        },
        {
          id: 10,
          name: "Lathika Shetty",
          degree: "MD (Radio Diagnosis)",
          specialization: "Radiologist",
          timings: "N/A"
        },
        {
          id: 11,
          name: "Dr. Cecil Fernando Amarnath",
          degree: "M.B.B.S, D.Ortho, M.S. (Ortho)",
          specialization: "Orthopaedic Surgeon",
          timings: "N/A"
        },
        {
          id: 12,
          name: "Dr. Siddharth M. Pawaskar",
          degree: "M.B.B.S, M.S. (Ortho)",
          specialization: "Orthopaedic Surgeon",
          timings: "N/A"
        },
        {
          id: 13,
          name: "Dr. Milind Vittal Prabhu",
          degree: "M.B.B.S, DNB (Ortho)",
          specialization: "Orthopaedic Surgeon",
          timings: "N/A"
        }
      ]
    },
    {
      id: 9,
      name: 'Mangala Hospital And Kidney Foundation ',
      history: 'Mangala Hospital and Kidney Foundation, established in 1990 in Mangalore, is a dedicated healthcare facility focusing on nephrology and kidney care, and has since expanded to provide a broad range of medical services while emphasizing research and treatment in nephrology.',
      services: 'Mangala Hospital and Kidney Foundation provides specialized services in nephrology, including kidney care, dialysis, kidney transplants, advanced diagnostics, and comprehensive medical treatments for various kidney-related conditions.',
     doctors: [
        {id: 1, name: 'Dr.Shankar ', degree: 'MBBS- K.S. Hegde Medical Academy, Mangalore- 2010', specialization: 'Neurologist', timings: '9:55 am - 12:00 pm' },
        {id: 2, name: 'Dr.Vishnu ', degree: 'MBBS MD DM', specialization: 'Myringotomy', timings: '9:30 am - 6:30 pm' },
        {id: 3, name: 'Dr.Sriram Bhat M ', degree: 'MD', specialization: 'Dermatologist, Cosmetologist', timings: '8:30 am - 12:30 pm' },
        {id: 4, name: 'Dr. Prashant Kadri ', degree: 'MBBS MD', specialization: 'Nephrologist', timings: '8:30 am - 5:00 pm' },
        {id: 5, name: 'Dr.Shihab Hasan', degree: 'MD (Internal Medicine) 2012', specialization: 'Internal Medicine', timings: '4:30 pm - 8:30 pm' },
        {id: 6, name: 'Dr.Kishore Shetty', degree: 'MBBS MD', specialization: 'General Physician, Put', timings: 'N/A' },
        {id: 7, name: 'Dr.Anitha G Bhat', degree: 'MBBS MS', specialization: 'Anesthesiologist', timings: 'N/A' },
        {id: 8, name: 'Dr.Roshan', degree: 'MBBS MD', specialization: 'Pulmonologist', timings: 'N/A' },
        {id: 9, name: 'Dr.Keshav Prasad Y V', degree: 'MBBS MD DNB', specialization: 'Surgeon', timings: 'N/A' },
        {id: 10, name: 'Dr.Mayur Prabhu ', degree: 'MBBS MS', specialization: 'Nephrologist', timings: 'N/A' }
      ]
    },
    {
      id: 10,
      name: 'Tara Hospital',
      history: 'Tara Hospital in Mangalore was founded in 1991 and has grown into a well-regarded healthcare facility known for its commitment to providing quality medical care and specialized services across multiple disciplines.',
      services: 'Tara Hospital offers a range of medical services, including general healthcare, specialized treatments, diagnostics, surgical procedures, and patient care across various medical fields.',
      doctors:[
        {id: 1, name: 'Dr.Kiran Baliga', degree: 'MBBS', specialization: 'Paediatrician', timings: '9:55 am - 12:00 pm' },
        {id: 2, name: 'Dr.Vijith Shetty', degree: 'MBBS MD DM', specialization: 'Oncologist', timings: '9:30 am - 6:30 pm' },
        {id: 3, name: 'Dr.Preetham Philip', degree: 'MD', specialization: 'Paediatrician', timings: '8:30 am - 12:30 pm' },
        {id: 4, name: 'Dr. Ashwin Kamath ', degree: 'MBBS MD', specialization: 'Orthopaedic Surgeon', timings: '8:30 am - 5:00 pm' },
        {id: 5, name: 'Dr.Shihab Hasan', degree: 'MD (Internal Medicine) 2012', specialization: 'Internal Medicine', timings: '4:30 pm - 8:30 pm' },
        {id: 6, name: 'Dr.Nishi Guru', degree: 'MBBS MD', specialization: 'Psychiatrist', timings: 'N/A' },
        {id: 7, name: 'Dr.Anitha G Bhat', degree: 'MBBS MS', specialization: 'Anesthesiologist', timings: 'N/A' },
        {id: 8, name: 'Dr.Siddharth Mulki', degree: 'MBBS MD', specialization: 'Laparoscopic & General Surgeon', timings: 'N/A' },
        {id: 9, name: 'Dr. Prajwal Ravinder', degree: 'MBBS MD DNB', specialization: 'Urologist', timings: 'N/A' },
        {id: 10, name: 'Dr.Mayur Prabhu ', degree: 'MBBS MS', specialization: 'Nephrologist', timings: 'N/A' }
      ]
    }
  
  
      
      // Add more hospitals with 12 doctors each
    ];
    
    export default hospitals;
    