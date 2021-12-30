import { useState, useEffect, React } from 'react';
import { Col, Row, Container, Carousel } from 'react-bootstrap';
import CommunityCard from '../../../components/innerComponents/communityCard';
import { useSelector} from 'react-redux';
import './profile.css';
export default function PublicProfile() {
    const state = useSelector(state => state);
    const props = {
        skills: [
            {
                name: "Skill",
                currentLevel: 4,
                subSkills: [
                    {
                        name: "sub Skill",
                        currentLevel: 2,
                    }
                ]
            },
            {
                name: "Skill two ",
                currentLevel: 3,
                subSkills: [
                    {
                        name: "sub Skill",
                        currentLevel: 4,
                    }
                ]
            }
        ],
        communities: [
            {
                name: "stars",
                description: "lorMollit est sint id sit esse duis.",
                interest: "25%"
            },
            {
                name: "bright",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            }, {
                name: "timerook",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "stellar",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "frustrate",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "brown",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "plague",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            },
            {
                name: "passion",
                description: "lorMollit est sint id sit esse duis.",
                interest: "7.5%"
            }

        ]
    }
    // let links = props.links.map(link => {
    //     return (
    //         <li><a href={link.url}>{link.name}</a></li>
    //     )
    // })
    let communities = props.communities.map(community => {
        return (
            <Col>
                <CommunityCard
                    name={community.name}
                    description={community.description}
                    page="public"
                    interest={community.interest}
                />
            </Col>

        )
    });
    let skills = props.skills.map(skill =>{
        return (
            <div className='flex-skill'>
                <p>{skill.name}</p>
                <p>{skill.currentLevel}</p>
            </div>
        )
    })
const [stateRows, setRows] = useState([communities])
useEffect(()=>{
    console.log(communities.length);
    let rows = [];
    for (let i = 0; i < communities.length; i += 3) {
        console.log(i)
        rows.push(
            <Carousel.Item>
                <Row>
                    {communities[i]}
                    {communities[i + 1]}
                    {communities[i + 2]}
                </Row>
            </Carousel.Item>
        )
    };
    setRows(rows)
    console.log(stateRows);
}, [])
console.log(state)
console.log(state.user)
const {img_url, description, username, link_name_one, link_url_one,link_name_two, link_url_two, link_name_three, link_url_three} = state.user
    return (
        <Container id="public-profile">
            <Row id="info-row" className="outer-rows">
          
                <Col className="top-row-col">
                    <Row id="img-row"><img src={img_url} alt="profile picture"></img></Row>
                    <Row><ul>
                    <li><a href={link_url_one}>{link_name_one}</a></li>
                    <li><a href={link_url_two}>{link_name_two}</a></li>
                    <li><a href={link_url_three}>{link_name_three}</a></li>
                        </ul></Row>
                </Col>
                <Col className="top-row-col">
                    <Row><h2>{username}</h2></Row>
                    <Row id="skill-box" > {skills}</Row>
                </Col>
               
            </Row>
            <Row className="outer-rows">
        
                <Col lg={10}>{description}</Col>

            </Row>
            <Row className="outer-rows">
          
                <Col id="skill-box" lg={10}></Col>
            
            </Row>
            <Row className="outer-rows">
                
                <Col lg={10}>
                    <Carousel>
                        {stateRows}
                    </Carousel>
                </Col>

            </Row>
        </Container>
    )
}