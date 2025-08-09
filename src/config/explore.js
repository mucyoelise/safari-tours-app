import volcanoImg from '../img/volcano-np.jpg';
import nyungweImg from '../img/nyungwe-np.jpg';
import akageraImg from '../img/akagera-np.jpg';

export const exploreConfig = {
    title: "Explore National Parks in Rwanda",
    parks: [
        {
            img: {
                src: volcanoImg,
                alt: "Volcano Park Image"
            },
            name: "Volcano N.P",
            location:"North West",
            price:"$556",
            description: 
           `Volcanoes National Park is found in the Northwestern part of the Rwanda. 
            It borders National Parks in Uganda and Virunga National Park in Congo. 
            It covers 160 km² of rainforest and encompasses five of the eight volcanoes 
            in the Virunga Mountains, namely Karisimbi, Bisoke, Muhabura, Gahinga, and Sabyinyo.`
        },
        {
            img: {
                src: nyungweImg,
                alt: "Nyungwe Park Image"
            },
            name: "Nyungwe N.P",
            location:"South West",
            price:"$956",
            description: 
            `Nyungwe National Park lies in the southwest of Rwanda, partly abutting the Burundi border.
             It's a vast area of mountain rainforest, home to many species of chimpanzees, plus owl faced 
             and colobus monkeys. The canopy walkway, part of the Igishigishigi trail, is a high suspension 
             bridge with views over the valley and surrounding forests.`
        },
        {
            img: {
                src: akageraImg,
                alt: "Akagera Park Image"
            },
            name: "Akagera N.P",
            location:"Eastern",
            price:"$876",
            description: 
            `Akagera National Park lies in eastern Rwanda, hugging the border with Tanzania. 
            It's characterized by woodland, swamps, low mountains and savannah. The varied terrain 
            shelters wildlife including zebras, giraffes, elephants, lions and hundreds of bird species, 
            such as the rare shoebill stork. In the southern part of the park, vast Lake Ihema is home to hippos and crocodiles`
        }
    ]
}