import { GrHomeRounded } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
// src/data/testimonials.js
export const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        title: 'CEO at Company',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote:
            'This product has significantly improved our workflow and productivity. Highly recommended!',
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Marketing Manager',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        quote:
            'An amazing experience! The support team was super helpful and the product works flawlessly.',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        title: 'Developer',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        quote:
            'As a developer, this tool has become indispensable for my daily tasks. Great job!',
    },
    // Add more testimonials as needed
];

export const navMenu = [
    {
        menuName: 'Services',
        name: "service",
        path: 'services'
    },
    {
        menuName: 'Events',
        name: "events"
    },
    {
        menuName: 'Gallery',
        name: "gallery",
        path: 'gallery'
    },
    // {
    //     menuName: 'Testimonials',
    //     name: "testimonials"
    // },
]

export const mobileMenu = [
    {
        id: 1,
        icon: GrHomeRounded,
        menuName: 'Home'
    },
    {
        id: 1,
        icon: TfiGallery,
        menuName: 'Gallery'
    },
    {
        id: 1,
        icon: GrHomeRounded,
        menuName: 'Home'
    }
]
