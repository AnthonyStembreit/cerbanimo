import { React, useState, useEffect } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
export default function MyPersonal() {
    const state = useSelector(state => state);
    const { img_url, description, username, link_name_one, link_url_one, link_name_two, link_url_two, link_name_three, link_url_three } = state.user
    const [stateSkills, setSkills] = useState([]);
    const [profileObj, setProfileObj] = useState(state.user);
    useEffect(() => {
        axios.get(`/api/skill/${state.user.id}`).then((res) => {
            console.log(res)
            let skills = res.data.map(skill => {
                return (
                    <div value={skill.id} className='flex-skill'>
                        <p>{skill.name}</p>
                        <p>{skill.currentLevel}</p>
                    </div>
                )
            })
            setSkills(skills)
        })
    }, [])
    let newDescription = description
    let newUsername = username
    function displayEdit(displayContainer, editContainer) {
        document.getElementById(displayContainer).style.display = "none";
        document.getElementById(editContainer).style.display = "block";
    }
    function hideEdit(displayContainer, editContainer) {
        document.getElementById(displayContainer).style.display = "block";
        document.getElementById(editContainer).style.display = "none";
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row><img src={img_url} alt="profile image"></img>    <i class="fas fa-pencil-alt"></i></Row>
                        <Row>
                            <ul id="currentProfileLinks">
                                <li><a href={link_url_one}>{link_name_one}</a></li>
                                <li><a href={link_url_two}>{link_name_two}</a></li>
                                <li><a href={link_url_three}>{link_name_three}</a></li>
                            </ul>

                            <i class="fas fa-pencil-alt"></i>
                            </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h2>{username}</h2>
                        </Row>
                        <Row><p id="currentProfileEmail">{username}</p> <i onClick={() => displayEdit("currentProfileEmail", "editProfileEmail")} class="fas fa-pencil-alt"></i>
                            <Form.Group id="editProfileEmail" style={{ display: "none" }}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control as="textarea" onChange={(e) => newUsername = e.target.value}>{username}</Form.Control>
                                <Button type="button" onClick={() => { setProfileObj({ ...profileObj, username: newUsername }); hideEdit("currentProfileEmail", "editProfileEmail") }}>Save</Button>
                            </Form.Group>
                        </Row>
                        <Row><p>**********</p>  <a href="#">reset passoword</a></Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="currentProfileDescription">{description}</div>

                        <Form.Group id="editProfileDescription" style={{ display: "none" }} >
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e) => newDescription = e.target.value} as="textarea" rows={3}>
                                {description}
                            </Form.Control>
                            <Button type="button" onClick={() => { setProfileObj({ ...profileObj, description: newDescription }); console.log(profileObj); hideEdit("currentProfileDescription", "editProfileDescription") }}>Save</Button>
                        </Form.Group>

                    </Col>
                    <i onClick={() => displayEdit("currentProfileDescription", "editProfileDescription")} class="fas fa-pencil-alt"></i>
                </Row>
            </Container >
        </div >
    )
}