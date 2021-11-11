import React, {useRef, useState} from 'react'
import './utils/LandingPage.css'
import logoname from '../../../img/logoname.png'
import pin from '../../../img/pin.png'
import back from '../../../img/back.png'
import group from '../../../img/group3.png'
import group2 from '../../../img/Group2.png'
import logoblack from '../../../img/logoblack.png'
import {db} from '../../util/firebase'
import {collection, addDoc, getDocs} from 'firebase/firestore'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  border: '1px solid rgba(0,0,0,0.1)',
  boxShadow: 24,
  p: 4,
};

const LandingPage = () => {
    const targets = useRef(null)
    const dataCollectionRef = collection(db, "datas")
    const scrollCollectionRef = collection(db, "scrolldowns")
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const handleOpen = () => {
        setOpen(true);
        
    }
    const handleClose = () => setOpen(false);

    const scrollDown = async () => {
        // const target = document.getElementById('second')
        targets.current.scrollIntoView({behavior: 'smooth'})
        const querySnapshot = await getDocs(dataCollectionRef);
        let applylist = [];
        querySnapshot.forEach((doc) => {
            applylist.push(doc.data().mail)
        });
    }

    const apply = async () => {
        if(email.length < 3){
            alert("이메일을 입력해주세요.");
            return;
        }
        await addDoc(dataCollectionRef, {
            mail: email,
            category: category,
            date:Date()
        })

        alert("신청되셨습니다!");
        handleClose();
        return;
    }
    
    return (
        <div className="allcontainer">
        <div className="container" style={{height:document.documentElement.clientHeight}}>
            <span className="textpart1">
            <div>
                <img src={pin} className="pin"/>
                <p className="titleMain">
                    누구나 하나쯤 <br/> 모으고 있는 것이 있죠.
                </p>
                <p className="titleItems">
                    스니커즈, 레고, 피규어, 건담, 다이어리, 책, LP <br/>
                    스타벅스, 굿즈, 맛집리스트, 경험과 추억...
                </p>
            </div>
            <div style={{maringTop:'60%'}}>
                <p className="titleWe">
                    우리는 모두 수집가입니다.
                </p>
            </div>
            <div className="Button" onClick={scrollDown}>
                <p>
                아래 스크롤하기
                </p>
            </div>
            </span>
            <span className="imagepart1">
                <img src={group} className="images"/>
                <img src={group2} className="images2"/>
            </span>
        </div>

        <div id="second" ref={targets} className="secondBlock" style={{height:document.documentElement.clientHeight-150}}>
            <span className="textpart">
            <div>
                <p className="titleMain2">
                    당신의 컬렉션을 전시하고, <br/>
                    비슷한 취향을 가진<br/>
                    사람들과 소통해 보세요.
                </p>
            </div>
            <div>
                <p className="titleDesc">
                    내 컬렉션을 온라인상에 진열해서 <span style={{color:'rgb(255, 138, 60)'}}>자랑</span>하고 <br/>
                    유용한 <span style={{color:'rgb(255, 138, 60)'}}>정보를 공유</span>하고 <br/>
                    같은 컬렉션을 모으는 사람들과 <span style={{color:'rgb(255, 138, 60)'}}>소통</span>해요.
                </p>
            </div>
            <div>
                <p className="desc">
                    " 일상의 모든 수집가들을 위한 플랫폼 "
                </p>
            </div>
            <div className="logo">
                <img src={logoblack} alt="logoblack" className="logoimage"/>
                <p className="logodesc">
                    soozip
                </p>
            </div>
            <div className="apply" onClick={handleOpen}>
                오픈시 알림받기 <span style={{fontSize:20, marginLeft:8}}>click</span>
            </div>
            <div>
                <p className="starbucks">
                   <span style={{fontSize:19}}>☕️</span> 선정해서 5명에게 스타벅스 기프티콘 증정
                </p>
            </div>
            </span>
            <span className="imagepart">
                <img src={back} alt="logo" className="backImage"/>
            </span>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <p className="starbucks">
                   <span style={{fontSize:19}}>☕️</span> 5분을 선정해서 스타벅스 기프티콘을 드립니다.
                </p>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    이메일을 입력해주세요.
                </Typography>
                <Input value={email} className="input" placeholder="이메일" onChange={e => setEmail(e.currentTarget.value)}></Input>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginTop:30}}>
                    컬렉션 종류를 알려주세요.
                </Typography>
                <Input value={category} className="input" placeholder="종류" onChange={e => setCategory(e.currentTarget.value)}></Input>
                <div style={{marginTop:10}}>
                <Button onClick={apply} style={{backgroundColor:'#47b9ff', marginLeft:10, color:'white', width:'20%'}}>
                    확인
                </Button>
                <Button onClick={handleClose} style={{ marginLeft:10, color:'black', width:'10%'}}>
                    닫기
                </Button>
                </div>
                </Box>
            </Modal>
        </div>
    )
}

export default LandingPage
