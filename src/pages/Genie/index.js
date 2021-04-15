import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../config/api'
import ReactLoading from 'react-loading';
import { ReactSVG } from 'react-svg'

import genieQuestion from '../../assets/genie_question.svg'
import genieThinking from '../../assets/genie_thinking.svg'
import genieWin from '../../assets/genie_win.svg'

import {
    Container,
    ContentContainer,
    Answer,
    AnswersContainer,
    Button,
    IntroStrong,
    IntroText,
    LoadingContainer,
    LoadingText,
    QuestionText,
    ResultImage,
    ResultText,
    Section,
    Title
} from './styles'


export default function Genie() {

    const [genio, setGenio] = useState(0)
    const [question, setQuestion] = useState('')
    const [answers, setAnswers] = useState([])
    const [win, setWin] = useState(false)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState()

    let { id } = useParams();

    async function handleCreate() {
        try {
            setLoading(true)
            const genioRequestCreate = await api.post('/akinator/create', {
                id
            })

            const { pergunta, respostas } = genioRequestCreate.data
            setGenio(id)
            setQuestion(pergunta)
            setAnswers(respostas)
            setLoading(false)

        } catch (err) {
            setLoading(false)
            console.log('Ocorreu um erro')
        }
    }

    async function handleStep(userResponse) {
        try {
            setLoading(true)

            const genioRequestStep = await api.post('/akinator/step', {
                id,
                userResponse
            })
            const { pergunta, respostas, resultado } = genioRequestStep.data

            if (!resultado) {
                setQuestion(pergunta)
                setAnswers(respostas)
            } else {
                setResult(resultado[0])
                setWin(true)
            }
            setLoading(false)

        } catch (err) {
            setLoading(false)
            console.log("Ocorreu um erro")
        }
    }

    async function handleAgain() {

        try {
            setWin(false)
            setLoading(true)
            const genioRequestCreate = await api.post('/akinator/create', {
                id
            })
            const { pergunta, respostas } = genioRequestCreate.data
            setGenio(id)
            setQuestion(pergunta)
            setAnswers(respostas)
            setLoading(false)

        } catch (err) {
            setLoading(false)
            console.log('Ocorreu um erro')
        }
    }

    return (
        <Container>


            <ReactSVG src={loading ? genieThinking : win ? genieWin : genieQuestion}
                viewBox="100 100 100 100"
                style={{
                    position: 'absolute',
                    right: 0,
                    maxHeight: 400

                }} />
            {
                win &&
                <Button
                    onClick={handleAgain}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '35%'
                    }}
                >Jogar novamente</Button>
            }
            <ContentContainer>
                {
                    genio === 0 ?
                        loading ?
                            <LoadingContainer>
                                <LoadingText>Aguarde o Gênio se preparar</LoadingText>
                                <ReactLoading color={'#4d4844'} type="bubbles" height={300} width={250} />
                            </LoadingContainer>
                            :
                            <Section>
                                <IntroText>
                                    <IntroStrong>Vamos jogar ?</IntroStrong>
                                    <br />
                                    Aposto que eu descubro em qual famoso ou personagem que você está pensando.
                                </IntroText>
                                <Button
                                    onClick={handleCreate}
                                >
                                    Jogar
                                </Button>
                            </Section>
                        :
                        !win ?
                            loading ?
                                <LoadingContainer>
                                    <ReactLoading color={'#4d4844'} type="bubbles" height={300} width={250} />
                                </LoadingContainer>
                                :
                                <Section style={{
                                    justifyContent: 'center'
                                }}>
                                    <QuestionText>
                                        {question}
                                    </QuestionText>
                                    <AnswersContainer>
                                        {
                                            answers.map((answer, index) => (
                                                <Answer onClick={() => { handleStep(index) }}>
                                                    { answer}
                                                </Answer>
                                            ))
                                        }
                                    </AnswersContainer>
                                </Section>
                            :
                            <Section style={{ justifyContent: 'center' }}>
                                <ResultText>
                                    Provavelmente você está pensando em:<br /> {result.name}
                                </ResultText>
                                <ResultImage src={result.absolute_picture_path} />
                            </Section>
                }
            </ContentContainer>
        </Container >
    )
}