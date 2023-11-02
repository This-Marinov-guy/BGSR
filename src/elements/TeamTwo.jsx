import React, { Fragment } from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ImageFb from './ui/ImageFb'

const TeamTwo = (props) => {
    return (
        <Fragment>
            {/* <div style={{ margin: 'auto', width: '80%' }} className='center_div'>
                <ImageFb className='team_member_border-2 mb--80' src={`/assets/images/team/${props.folder}/com-full.webp`} fallback={`/assets/images/team/${props.folder}/com-full.jpg`} alt='Committee' />
            </div> */}
            <div className='container committee_container'>
                {props.target.map((value) => {
                    return (<div key={value.id} className={`${value.id % 2 === 0 ? 'committee_member_left' : 'committee_member_right'}`}>
                        <ImageFb src={`/assets/images/team/${props.folder}/${value.id}.webp`} fallback={`/assets/images/team/${props.folder}/${value.id}.jpg`} alt='Committee Member' />
                        <div className='text'>
                            <div className='name'>
                                <h3 className='mr--5'>{value.name}</h3>
                                <h4>{value.title}</h4>
                            </div>
                            <p>{value.description}</p>
                            <p>{value.interests}</p>
                            <div>
                                {value.instagram && <a
                                    href={value.instagram}
                                    target="_blank"
                                >
                                    <FaInstagram />
                                </a>}
                                {value.linkedin && <a
                                    href={value.linkedin}
                                    target="_blank"
                                >
                                    <FaLinkedinIn />
                                </a>}
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </Fragment>
    )
}

export default TeamTwo