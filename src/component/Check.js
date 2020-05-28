import React ,{useState,useEffect} from 'react';
import {Card,CardBody,CardImg,Col,Row} from 'reactstrap';
import axios from 'axios';

function Check()
{
    const [users,setUsers] = useState({})
    const [name,setName] = useState('deadhit-7081')
    const [buttonClick,setButtonClick] = useState('')

    const handleClick = () =>{
        setButtonClick(name)
    }

    useEffect(() =>{
        axios.get(`https://api.github.com/users/${name}`,
        {
            headers:{
                authorization: "token  c3e105caabebb33e64b2095596783d1ea81f5c58"
            }
        })
        .then(res =>{
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => console.log(err))
    },[buttonClick])
    return(
        <div className="container">
            <Row className="r1">
            <input id="id1" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="User Name"/>
            <button type="button" onClick={handleClick}>Search</button>
            </Row><br/>
            <Row className="r1">
            <Col md={6}>
            <Card>
                <CardImg className="c1" src={users.avatar_url} />
                <CardBody>
                   Login Name : {users.login}<br/>
                    User Name : {users.name}<br/>
                    Followers : {users.followers}<br/>
                    Following : {users.following}<br/>
                    Bio : {users.bio}<br/>
                    Repositories : {users.public_repos} 
                </CardBody>
            </Card>
            </Col>
            </Row>
        </div>
    )
}

export default Check;