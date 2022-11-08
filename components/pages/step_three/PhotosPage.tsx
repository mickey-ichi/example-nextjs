import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { FormContext } from '../../../contexts/CurrentFormContext'

type PhotosProps = {
    onNext: () => void,
    onBack: () => void,
}

export const PhotosPage = ({ onNext, onBack }: PhotosProps ) => {

    const { setPhotosContext } = useContext(FormContext)

    const [uploads, setUploads] = useState<{
        url: string,
        name: string,
        size: number,
    }[]>([],)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let fileTooBig: boolean = false
        if (e.target.files) {
            const filesArray = Array.from(e.target.files)
            const sizeCheckArray = filesArray.filter(file => file.size <= 25000000)
            fileTooBig = sizeCheckArray.length !== filesArray.length

            if (!fileTooBig) {
                const newUploads = filesArray.map((file) => {
                    return {url: URL.createObjectURL(file), name: file.name, size: file.size/1000000}
                })
                if ((uploads.length + newUploads.length) <= 10) {
                    setUploads(prev  => [...prev, ...newUploads])
                }
                else (alert('maximum 10 photo uploads allowed'))
            }
            else{
                alert('one or more files exceeded 25 Mb')
            }
        }
    }

    const handleDelete = (urlToDelete: string) => {
        setUploads(prev => prev.filter(item => (item.url !== urlToDelete)))
    }


    const handleSubmit = () => {
        setPhotosContext(uploads)
        // reloads this page until next page is built
        onNext()
    }

    return (
        <PageContainer>
            <InstructionsText>Add product photos (max 10)</InstructionsText>
            <PhotosContainer>
                <UploadSection>
                    <Label htmlFor='upload'>
                        <Icon src={'/images/icons/upload.png'}></Icon>
                        <p>Upload photo(s)</p>
                    </Label>
                    <input
                        id='upload'
                        type='file'
                        multiple
                        accept='.jpg,.JPG,.jpeg,.JPEG,.png,.PNG,.gif,.GIF'
                        onChange={(e) => handleChange(e)}
                        style={{visibility: 'hidden'}}
                    />
                    <UploadInfo>Max size - 25Mb  Jpg, Png, Gif</UploadInfo>
                </UploadSection>
                <PhotosUploaded>
                    {uploads &&
                        uploads.map((item) => (
                            <PhotoBox key={Math.random()}>
                                <Photo src={item.url} />
                                <PhotoDetails>
                                    <TrashContainer
                                        className="trash-container"
                                        onClick={() => handleDelete(item.url)}
                                    >
                                        <Icon src={'/images/icons/trash.png'}></Icon>
                                    </TrashContainer>
                                    <Name>{item.name}</Name>
                                    <Size>{`${item.size} Mb`}</Size>
                                    {/*<label htmlFor='progress'>upload progress</label>*/}
                                    {/*<progress id='progress' value='100' max='100'></progress>*/}
                                </PhotoDetails>
                            </PhotoBox>
                        ))
                    }
                </PhotosUploaded>
            </PhotosContainer>
            <Button onClick={() => onBack()}>Back</Button>
            <Button onClick={() => handleSubmit()}>Next →</Button>
        </PageContainer>
    )
}

export const InstructionsText = styled.h4`
    text-align: left;
    margin-left: 2rem;
`

export const PhotosContainer = styled.div`
    margin: auto;
    padding-bottom: 1rem;
    width: 95%;
    height: auto;
    min-height: 50vh;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
    
     @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
    
    border: 2px dotted #D7D7D7;
`

export const UploadSection = styled.div`
    width: 10rem;
    
    @media only screen and (max-width: 600px) {
        margin: auto;
    }
`

export const Label = styled.label`
    margin: 1rem;
    width: 8rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    border: 2px solid #2D5BFF;
    border-radius: 8px;
   
    p {
        margin: auto;
        width: 60px;
        overflow-wrap: wrap;
    }
    &:hover {
        background: lightyellow;
    }
`

export const Icon = styled.img`
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 0;
    width: 1rem;
    height: 1rem;
`

export const UploadInfo = styled.h4`
    color: #5C5C5C;
    font-weight: 400;
    font-size: 12px;
    margin: auto;
    margin-top: -2rem;
    width: 100px;
`

export const PhotosUploaded = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const PhotoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    
    .trash-container {
        display: none;
    }
    &:hover {
        .trash-container {
            display: block;
        }
    }
`

export const Photo = styled.img`
    margin: 10px;
    margin-bottom: 1rem;
    width: 7rem;
    height: 7rem;
    display: flex;
    flex-direction: column;
`

export const PhotoDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 8rem;
    text-align: left;
    
    * {
        margin: 0;
    }
`

export const TrashContainer = styled.div`
    background: #FF3030;
    border-radius: 8px;
    width: 2.5rem;
    height: 2.5rem;
    padding: auto;
    text-align: center;
    margin: auto;
    position: absolute;
    margin-top: -5.5rem;
    margin-left: 3rem;
    * {
        margin-top: 0.75rem;
    }
    
    &:hover {
        cursor: pointer;
    }
`

export const Name = styled.h4`
    font-weight: 700;
    font-size: 12px;
`

export const Size = styled.h4`
    margin-top: 5px;
    color: #5C5C5C;
    font-weight: 400;
    font-size: 12px;
`
