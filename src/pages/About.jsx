import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import textContst from '../constants/textConts';

const About = () => {
    return (
        <div>
            <h1 style={{marginTop: 40, display: 'flex', justifyContent: 'center'}}>
                О сайте
            </h1>
            <div style={{width: 1000, dislay: 'flex', wordBreak: 'break-word', fontSize: 17, lineHeight: '1.6em' }}>
                {textContst.aboutText}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 20, width: 'auto'}}>
                <Button inverted color='teal'><Link to='/memes'>Смотреть мемные картинки :)</Link></Button>
            </div>
        </div>
    );
}

export default About;
