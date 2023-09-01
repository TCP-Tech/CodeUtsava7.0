import problem1 from '../images/p1.jpeg'
import problem2 from '../images/p2.png'
import problem3 from '../images/p3.png'
import problem4 from '../images/p4.png'
import problem5 from '../images/p5.png'

const problems = [
  {
    title: "Problem 1: Environmental Monitoring",
    domain: 'IOT',
    statement: "Intensive care represents the highest level of patient care and treatment designated for critically ill patients with potentially recoverable life-threatening conditions. The Intensive Care Unit (ICU) is a separate, self-contained area within a medical facility, equipped with high-tech specialized facilities designed for close monitoring, rapid intervention and often extended treatment of patients with acute organ dysfunction. You are required to create an app which will show “Temperature” and “Humidity” of 2 ICU rooms for every 30 minutes from last day. The app should retrieve the data from a cloud. The data should be recorded by you from GSM Module(GSM data-logger is an IOT device designed to record temperature and humidity from built-in sensors) and Raspberry Pi should be used. Note: The data should be displayed through App only(You can show as much data as you can record in the provided time interval)",
    img: problem1,
  },
  {
    title: "Problem 2: Driver Monitoring",
    domain: 'AI, ML and App Development',
    statement: "Falling asleep while driving accounts for a considerable proportion of vehicle accidents under monotonous driving conditions. Many of these accidents are related to work—for example, drivers of lorries, goods vehicles, and company cars. Time of day (circadian) effects are profound, with sleepiness being particularly evident during night shift work, and driving home afterwards. Circadian factors are as important in determining driver sleepiness as is the duration of the drive, but only duration of the drive is built into legislation protecting professional drivers. Older drivers are also vulnerable to sleepiness in the mid-afternoon. You are required to create an android app which will produce a sound if the app founds that driver is sleepy or sleep deprived according to the frequency of yawning or blinking of driver. The app should also send an emergency SOS to the numbers provided by driver informing about the condition of data. The app should support an external web cam using which it can monitor the driver.",
    img: problem2,
  },
  {
    title: "Problem 3: Electronic Health Recorder",
    domain: 'Blockchain',
    statement: "An electronic health record (EHR) contains highly sensitive and critical data related to patients that is shared among multiple facilities and agencies for effective diagnosis and treatment. Types of data, an EHR typically includes: 1. Contact information 2. Information about visits to healthcare professionals 3. Allergies 4. Insurance information 5. Family history 6. Immunization status 7. Information about any conditions or diseases 8. A list of medications 9. Records of hospitalization 10. Information about any surgeries or procedures performed. So you have to use block chain technology for accessing and managing the privacy and security of patients data.",
    img: problem3,
  },
  {
    title: "Problem 4: Smart Street Light System",
    domain: 'IOT',
    statement: "You have to create a system which have smart light dimming module. The system should perform following operations as per the situation 1. If visibility of street light bulb is low, then the intensity of light should be maximized. 2. To dim the street lights automatically when no movement is detected and the intensity of light will increase automatically. (Extra : How will the system detect the movement in rainy season? ) 3. The system should keep a track of all the street lights on the basis of their area, pin code, number of poles, and number of poles in working state. Store these information in the database. Also, send notification to the department to replace the faulty bulbs.",
    img: problem4,
  },
  {
    title:"Problem 5: Online Notes Maker",
    domain:"Desktop App Development",
    statement:"An online class is a course conducted over the Internet. They are generally conducted through a learning management system over platform which support audio video streaming. You are required to create a desktop app which can run over any online multimedia platform such as google meet. The app should produce a ppt of the slides shown by the teacher at the end of class. Apart from ppt the app should also produce a text file which will be made up of words spoken by the teacher and students during the class.",
    img: problem5,
  }
];

export default problems;