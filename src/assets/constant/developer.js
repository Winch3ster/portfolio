import brokerPetrolImg from '../images/developer/brokerPetrol.png'
import citisoftAppImg from '../images/developer/citisoftApp.png'

//The imageSide indicate which side the image will be on 0 --> Left side and 1 --> on the right side
export const codingProjects = [
    {
        companyName: "CitiSoft",
        name:"Vendor Application Inventory Platform",
        type: "Case Study Summary",
        description: "Financial services consultancies assist companies in selecting the right technology by leveraging their knowledge of available solutions, gained through vendor demos, online research, training, and experience. However, storing information in multiple documents ",
        githubLink: "https://github.com/Winch3ster/Vendor-Application-Inventory-Platform",
        image: citisoftAppImg,
        imageOnLeft: false
    },

    {
        companyName: "Broken Petrol Ltd",
        name:"Gas Station Simulation",
        type: "Software Assignment",
        description: " The owners of Broken Petrol Ltd are own a petrol station on the M25 and every student is tasked with the design, implement, test and document an automated demo of a Petrol Station Management app.",
        githubLink: "https://github.com/Winch3ster/Broker-Petrol",
        image: brokerPetrolImg,
        imageOnLeft: true
    }
]


