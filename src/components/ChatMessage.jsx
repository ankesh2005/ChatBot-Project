import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';
import dayjs from 'dayjs';

export function ChatMessage(props) {
const {message, sender,time} = props;

return (
<div className={sender==='user'?'chat-message-user':'chat-message-robot'}>
  {sender === "robot" && <img src={RobotProfileImage} className="chat-message-profile"/>}
  <div className="chat-message-text">
  {message}
  {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
  </div>
  {sender === "user" && <img src={UserProfileImage}  className="chat-message-profile"/>}
</div>
);
}
