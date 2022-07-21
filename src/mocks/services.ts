import DesignIcon from '@/assets/images/services/design-icon.svg'
import ProgrammingIcon from '@/assets/images/services/programming-icon.svg'
import ResponsiveIcon from '@/assets/images/services/responsive-icon.svg'
import { Service } from "@/types";

export const services: Service[] = [
    {
        id: 1,
        img: DesignIcon,
        title: 'Design',
        label: 'Clean, modern, and eye-catching designs that convert!',
    },
    {
        id: 2,
        img: ProgrammingIcon,
        title: 'Development',
        label: 'Customized web development solutions to execute your ideas.',
    },
    {
        id: 3,
        img: ResponsiveIcon,
        title: 'Responsive',
        label: 'Responsive sites built for an optimal user experience across all devices.',
    },
];
