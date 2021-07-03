import asli from '../assets/images/asli.jpg';
import kavila from '../assets/images/kavila.jpg';
import muguka from '../assets/images/muguka.jpg';
import veve from '../assets/images/veve.jpg';
import huahd from '../assets/images/huahd.jpg';
import wastawi from '../assets/images/wastawi.jpg';
import sup1 from '../assets/images/sup1.jpg';
import sup2 from '../assets/images/sup2.jpg';
import sup3 from '../assets/images/sup3.jpg';

export const products = [
    {
        name: 'Asili',
        imgUrl: asli,
    },
    {
        name: 'Alela',
        imgUrl: veve,
    },
    {
        name: 'Giza',
        imgUrl: kavila,
    },
    {
        name: 'Jaba',
        imgUrl: wastawi,
    },
    {
        name: 'Kangeta',
        imgUrl: muguka,
    },
    {
        name: 'Mbaine',
        imgUrl: huahd,
    }
];

export const suppliers = [
    {
        name: 'John wa Mwage',
        location: 'Ark Junior School - South B',
        imgUrl: sup1,
        deliveryTime: 17,
        distance: 2.5,
        verified: true,
    },
    {
        name: 'Kalava Kayuso',
        location: 'Matter Hospital - South B',
        imgUrl: sup2,
        deliveryTime: 14,
        distance: 2.2,
        verified: true,
    },
    {
        name: 'Vadhu Vadhu',
        location: 'NSSF - South B',
        imgUrl: sup3,
        deliveryTime: 7,
        distance: 2.4,
        verified: false,
    },
    {
        name: 'Git Pilot',
        location: 'Mwaniki Road - South B',
        imgUrl: sup2,
        deliveryTime: 3,
        distance: 1,
        verified: false,
    }
]