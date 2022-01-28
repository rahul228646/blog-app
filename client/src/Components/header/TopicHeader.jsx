import React, {Component} from 'react';
import Image from './blogTopicHeader.jpg'
import './topicHeader.css'
class TopicHeader extends Component {
    render() {
        return (
                <div>
                    <img
                        src={Image}
                        className="HeaderImage"
                    />
                    <h1 className='ImageText'>Science</h1>
                </div>
        );
    }
}

export default TopicHeader;