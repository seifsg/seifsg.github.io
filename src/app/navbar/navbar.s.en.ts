import {NavbarText} from './navbar.text';

// Navbar english text
export class NavbarEn extends NavbarText {
    // static content
    home = 'Home';
    activities = 'Activities';
    currentActivity = 'Current Activity';
    activitiesLog = 'Activities Log';
    portfolio = 'Portfolio';
    about = 'About';
    blog = 'Blog';
    usefulResources = 'Useful Resources';
    subBrand = ['Freelancer',
                'FREElancer',
                'FullStack Developer',
                'Full Stack Developer',
                'Software Engineer',
                'Gamer',
                'AI Enthusiast',
                'Mr. Robot',
                'CyberSecurity Enthusiast',
                'Tech Expert'
            ];

    // useful singleton here
    static init(): NavbarText {
        return new this();
    }
}
