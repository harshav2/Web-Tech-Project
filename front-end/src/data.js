import { SiOpenaigym } from "react-icons/si";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Fitness Programs",
    path: "/programs",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Weight Loss Program",
    info: "Achieve your fitness goals with our specialized weight loss program.",
    path: "/programs/weight-loss",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Strength Training",
    info: "Build strength and endurance with our personalized strength training program.",
    path: "/programs/strength-training",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Flexibility Program",
    info: "Improve your flexibility and agility with our dedicated flexibility program.",
    path: "/programs/flexibility",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Body Composition",
    info: "Optimize your body composition with our expert guidance and training.",
    path: "/programs/body-composition",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Personalized Training",
    desc: "Receive personalized training plans tailored to your fitness goals.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Commitment to Excellence",
    desc: "Experience excellence in fitness with our dedicated and experienced trainers.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Community Support",
    desc: "Join our fitness community and receive support on your fitness journey.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Innovative Workouts",
    desc: "Engage in innovative workouts designed to keep your fitness routine exciting.",
  },
];

export const sideBar = [
  {
    id: 1,
    item: "Daily Tasks",
    Link: "/tasks",
  },
  {
    id: 2,
    item: "Exercise Library",
    Link: "/exercises",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I work out?",
    answer:
      "We recommend a balanced workout routine, including both cardio and strength training, at least 3-4 times a week.",
  },
  {
    id: 2,
    question: "What time of day is best for exercise?",
    answer:
      "The best time to exercise is the time that fits your schedule and allows you to be consistent. Find a time that works for you, whether it's morning, afternoon, or evening.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "The duration of your workouts depends on your fitness goals. Generally, 30 minutes to an hour of exercise is sufficient for most people.",
  },
  {
    id: 4,
    question: "Do I need to warm up before workouts?",
    answer:
      "Yes, warming up is essential to prepare your body for exercise and reduce the risk of injury. Spend 5-10 minutes doing light aerobic activity and dynamic stretches.",
  },
  {
    id: 5,
    question: "Strength training, cardio, or both?",
    answer:
      "A well-rounded fitness routine includes both strength training and cardio. Consult with our trainers to create a personalized plan based on your goals.",
  },
  {
    id: 6,
    question: "Is weight lifting important for strength training?",
    answer:
      "Weight lifting is an effective way to build strength. Our trainers can guide you on proper techniques and help you incorporate weight lifting into your routine.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    quote:
      "I've achieved amazing results with the weight loss program. The trainers are supportive, and the community here is fantastic!",
    job: "Fitness Enthusiast",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Alex Turner",
    quote:
      "The strength training program has transformed my fitness journey. The trainers are knowledgeable, and the atmosphere is motivating.",
    job: "Software Developer",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Rachel Miller",
    quote:
      "The flexibility program has improved my overall well-being. The trainers are dedicated, and the variety of workouts keeps it interesting.",
    job: "Yoga Instructor",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Mark Davis",
    quote:
      "The body composition program helped me achieve my fitness goals. The trainers are professional, and the support is unparalleled.",
    job: "Personal Trainer",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Sarah White",
    quote:
      "I love the circuit training program. The trainers are energetic, and the workouts are challenging yet fun!",
    job: "Graphic Designer",
    avatar: require("./images/avatar5.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Membership",
    desc: "Perfect for beginners who want personalized assistance in their fitness journey.",
    price: 29.99,
    features: [
      { feature: "Personalized Training Plans", available: true },
      { feature: "Dedicated Trainers", available: true },
      { feature: "Community Support", available: true },
      { feature: "Innovative Workouts", available: true },
      { feature: "Nutritional Guidance", available: true },
      { feature: "Monthly Progress Tracking", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Membership",
    desc: "Ideal for those who have a basic understanding and want a comprehensive fitness experience.",
    price: 49.99,
    features: [
      { feature: "Personalized Training Plans", available: true },
      { feature: "Dedicated Trainers", available: true },
      { feature: "Community Support", available: true },
      { feature: "Innovative Workouts", available: true },
      { feature: "Nutritional Guidance", available: true },
      { feature: "Monthly Progress Tracking", available: true },
    ],
  },
  {
    id: 3,
    name: "Platinum Membership",
    desc: "Designed for busy individuals who require home-based fitness solutions.",
    price: 89.99,
    features: [
      { feature: "Personalized Training Plans", available: true },
      { feature: "Dedicated Trainers", available: true },
      { feature: "Community Support", available: true },
      { feature: "Innovative Workouts", available: true },
      { feature: "Nutritional Guidance", available: true },
      { feature: "Monthly Progress Tracking", available: true },
    ],
  },
];

const Trainer1 = require("./images/trainer1.jpg");
const Trainer2 = require("./images/trainer2.jpg");
const Trainer3 = require("./images/trainer3.jpg");
const Trainer4 = require("./images/trainer4.jpg");
const Trainer5 = require("./images/trainer5.jpg");
const Trainer6 = require("./images/trainer6.jpg");

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "Jessica Brown",
    job: "Certified Personal Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Alex Turner",
    job: "Strength and Conditioning Specialist",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Sophia Lee",
    job: "Yoga and Flexibility Instructor",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "David Miller",
    job: "Nutrition and Wellness Coach",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Rachel White",
    job: "Circuit Training Specialist",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Michael Davis",
    job: "Holistic Fitness Coach",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];
