import {HomeText} from './home.text';

// Home english text
export class HomeEn extends HomeText {
    // static content
    typingStrings = ['Let\s build something together.'];
    getStarted = 'Get Started';

    // useful singleton here
    static init(): HomeText {
        return new this();
    }
}
