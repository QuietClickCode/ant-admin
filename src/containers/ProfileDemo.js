import React from 'react'
import {Button, notification} from 'antd';
import Background from './1.svg';

const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

function getName(user) {
    return user.name;
}

const test = function haha() {
    alert("xxxxx")
};
const user = {
    name: "zjj"
};
var haha = "fasfas"
const name = "haha";
var sectionStyle = {
    width: "20%",
    height: "400px",
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${Background})`
};

class ProfileDemo extends React.Component {

    //渲染函数
    render() {
        return (
            <div>
                <input value={haha}></input>
                <select>
                    <option>123</option>
                    <option>123123</option>
                </select>
                <button onClick={test}>fsafsa</button>
                <div>{name}</div>
                <div>{getName(user)}</div>
                <div>测试</div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
                <Button type="primary" onClick={openNotification}>
                    Open the notification box
                </Button>,
                <div>svg 背景的自适应方案</div>
                <div>
                    {/*<div style={sectionStyle}></div>*/}
                    <div>
                        <div style={{width: "60%", position: 'absolute', left: '50%'}}><img src={require('./1.svg')}
                                                                                            style={{
                                                                                                width: '20%',
                                                                                                height: '20%',
                                                                                            }}/></div>

                    </div>
                    <div style={{fontSize: '1rem', width: "80%", position: 'absolute', left: '50%'}}>dfjkas</div>
                    <div>
                        <div style={{width: "60%", position: 'absolute', left: '70%'}}><img src={require('./1.svg')}
                                                                                            style={{
                                                                                                width: '20%',
                                                                                                height: '20%',
                                                                                            }}/></div>

                    </div>
                    <div style={{fontSize: '1rem', width: "80%", position: 'absolute', left: '70%'}}>dfjkas</div>

                    <img src={require('./1.svg')} style={{width: '20%', height: '20%', margin: '0px 10px'}}/>
                    <img src={require('./1.svg')} style={{width: '20%', height: '20%', margin: '0px 10px'}}/>
                    <img src={require('./1.svg')}
                         style={{width: 'calc(20% - 20px)', height: '20%', margin: '0px 10px'}}/>
                </div>
            </div>
        )
    }
}

export default ProfileDemo
