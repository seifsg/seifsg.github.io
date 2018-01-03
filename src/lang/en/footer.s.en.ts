import {FooterText} from './footer.text';

// Home english text
export class FooterEn extends FooterText {
    // static content
    typingStrings = [
        'Let\s build something together.',
        'How about an adventure?',
        'What if we invent stuff?',
        'Curious? ^1000 Then let\'s do it!',
        'Need a hand? ^1000 <br> Let\'s collaborate!',
        'Looking for a partner? ^1000 <br> Good choice!'
    ];
    getStarted = 'Get Started';

    // useful singleton here
    static init(): FooterText {
        return new this();
    }
}
