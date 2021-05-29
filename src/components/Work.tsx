import React from 'react';
import { Center } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';

import '../styles/work.css'

const Work = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:996px)");

    return (
        <Center>
            <section style={isNotSmallerScreen ? {paddingLeft:"0",paddingRight:"0"} : {paddingLeft:"10px",paddingRight:"10px"} } className="card-list">
                <article className="card">
                    <Center>
                        <header className="card-header">
                            <Heading >Quick Whatsapp</Heading>
                        </header>
                        <div className="card-author">
                            <div className="author-avatar"  >
                                <img alt="" src="https://avatars.githubusercontent.com/u/65025579?v=4" />
                            </div>
                        </div>
                    </Center>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate!</h1>
                </article>

                <article className="card">
                    <Center>
                        <header className="card-header">
                            <Heading >Resume Builder</Heading>
                        </header>
                        <div className="card-author">
                            <div className="author-avatar"  >
                                <img alt="" src="https://avatars.githubusercontent.com/u/65025579?v=4" />
                            </div>
                        </div>
                    </Center>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate!</h1>
                </article>

                <article className="card">
                    <Center>
                        <header className="card-header">
                            <Heading >React Todo</Heading>
                        </header>
                        <div className="card-author">
                            <div className="author-avatar"  >
                                <img alt="" src="https://avatars.githubusercontent.com/u/65025579?v=4" />
                            </div>
                        </div>
                    </Center>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate!</h1>
                </article>

                <article className="card">
                    <Center>
                        <header className="card-header">
                            <Heading >Weather</Heading>
                        </header>
                        <div className="card-author">
                            <div className="author-avatar"  >
                                <img alt="" src="https://avatars.githubusercontent.com/u/65025579?v=4" />
                            </div>
                        </div>
                    </Center>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate!</h1>
                </article>

                <article className="card">
                    <Center>
                        <header className="card-header">
                            <Heading >Text to Speech</Heading>
                        </header>
                        <div className="card-author">
                            <div className="author-avatar"  >
                                <img alt="" src="https://avatars.githubusercontent.com/u/65025579?v=4" />
                            </div>
                        </div>
                    </Center>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate!</h1>
                </article>

                <article className="card">
                    <Center>
                        <header className="card-header">
                            <Heading >IP Tracker</Heading>
                        </header>
                        <div className="card-author">
                            <div className="author-avatar"  >
                                <img alt="" src="https://avatars.githubusercontent.com/u/65025579?v=4" />
                            </div>
                        </div>
                    </Center>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cupiditate!</h1>
                </article>

            </section>
        </Center>
    );
}

export default Work;
