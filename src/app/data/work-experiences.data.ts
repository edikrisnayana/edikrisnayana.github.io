import { WorkExperience } from '../models/work-experience';

export const WORK_EXPERIENCES_DATA: WorkExperience[] = [
  {
    companyName: "Agoda",
    country: "Bangkok, Thailand",
    position: "Senior Software Engineer - Backend",
    startDate: "October 2024",
    endDate: null,
    currentJob: true,
    responsibility: "Developed and maintain backend system."
  },
  {
    companyName: "Traveloka",
    country: "Jakarta, Indonesia",
    position: "Software Engineer - Backend",
    startDate: "October 2018",
    endDate: "September 2024",
    currentJob: false,
    responsibility: "Developed backend system for feature related with user account management and security."
  },
  {
    companyName: "Idemia",
    country: "Jakarta, Indonesia",
    position: "Application Developer",
    startDate: "April 2017",
    endDate: "September 2018",
    currentJob: false,
    responsibility: "Developed internal tool to manage card system such as injecting card serial number and card data encryption. This tool is developed using internal programming language called Gold, a programming language compiled using e-wam that developed by Wyde. The data are stored in SQL Server."
  },
  {
    companyName: "Nurosoft Consulting",
    country: "Surabaya, Indonesia",
    position: "Software Engineer - Frontend",
    startDate: "September 2016",
    endDate: "March 2017",
    currentJob: false,
    responsibility: "Developed mobile application using Xamarin. Xamarin is a cross platform to develop mobile application for android, iOS and Windows phone using C# language."
  },
  {
    companyName: "Multipolar Technology",
    country: "Tangerang, Indonesia",
    position: "Application Developer",
    startDate: "October 2014",
    endDate: "July 2016",
    currentJob: false,
    responsibility: "Developed interface for banking system to connecting e-channel such us teller, internet banking, mobile banking with core banking system. Core banking is contained data related to bank account and transaction. The interface is developed using AS400 machine with Cobol and RPG/400 language from IBM. The data are stored to DB2/AS400."
  }
];
