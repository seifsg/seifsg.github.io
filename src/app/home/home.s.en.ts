import {HomeText} from './home.text';

// Home english text
export class HomeEn extends HomeText {
    // static content
    home = 'Home';
    activities = 'Activities';
    currentActivity = 'Current Activity';
    activitiesLog = 'Activities Log';
    portfolio = 'Portfolio';
    about = 'About';
    blog = 'Blog';
    usefulResources = 'Useful Resources';

    // useful singleton here
    static init(): HomeText {
        return new this();
    }
}
