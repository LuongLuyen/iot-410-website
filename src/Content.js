import './App.css';
import {useState} from 'react'
import axios from 'axios'
import Logo from './logo.jpg'


function Content(props) {
    const [data, setData] = useState(props.props[0])
    const [status1, setStatus1] = useState(data.status_1)
    const [status2, setStatus2] = useState(data.status_2)
    const [status3, setStatus3] = useState(data.status_3)
    const [check ,setCheck] = useState(false)
    const dataUpdate = {
        status_1: status1,
        status_2: status2,
        status_3: status3
    }


    const handleClick1 =  ()=>{
        setCheck(!false)
        if(status1 === 'Tắt'){
            setStatus1('Bật')

        }else if(status1 === 'Bật'){
            setStatus1('Tắt')
        }
    }
    const handleClick2 =  ()=>{
        setCheck(!false)
        if(status2 === 'Tắt'){
            setStatus2('Bật')

        }else if(status2 === 'Bật'){
            setStatus2('Tắt')
        }
    }
    const handleClick3 =  ()=>{
        setCheck(!false)
        if(status3 === 'Tắt'){
            setStatus3('Bật')

        }else if(status3 === 'Bật'){
            setStatus3('Tắt')
        }
    }
    const send = ()=>{
        update()
        setCheck(false)
    }
    const update = ()=>{
        axios.put('https://server-iot-410.onrender.com/home-bong/646ae777e54cdf932ac520a2',dataUpdate)
        .then((response) => {
            setData(response.data)
        })
    }
    return ( 
        <div className='app'>
            <div>
                <img className='logo' alt="Logo" src={Logo} />
                <h1 className='title'> PHÒNG 410</h1>
            </div>
            <div className='content'>
                <div className='app_item'>
                <h1 className='app_title'>Phòng chính (Đèn)</h1>
                <div>
                    <button 
                        onClick={()=>handleClick1()}
                        className={data.status_1==="Bật"?"app_button-active": "app_button"}>{data.status_1}</button>
                    <button 
                        onClick={()=>handleClick2()}
                        className={data.status_2==="Bật"?"app_button-active": "app_button"}>{data.status_2}</button>
                    <button 
                        onClick={()=>handleClick3()}
                        className={data.status_3==="Bật"?"app_button-active": "app_button"}>{data.status_3}</button>
                </div>
                </div>
                <div className='app_item'>
                <h1 className='app_title'>Phòng chính (Quạt)</h1>
                <button className='app_button'> Quạt 1</button>
                <button className='app_button'> Quạt 2</button>
                </div>
                <div className='app_item'>
                <h1 className='app_title'>WC(Đèn)</h1>
                <button className='app_button'>Đèn 1</button>
                <button className='app_button'> Đèn 2</button>
                </div>
            </div>
            <div className={check? "notice":" notice_n"}>
                <div className='notice_ header'>
                    <div className='notice_name'>Thông báo</div>
                </div>
                <div className='active'>
                    <span 
                        onClick={()=>send()}
                        className='notice_active'>Kó</span>
                    <span 
                        onClick={()=>setCheck(false)}
                        className='notice_active'>Không</span>
                </div>
            </div>
    </div>
     );
}

export default Content;