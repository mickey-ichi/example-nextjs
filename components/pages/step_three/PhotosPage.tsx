import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { FormContext } from '../../../contexts/CurrentFormContext'
import {ButtonContainer} from "../../elements/ButtonContainer";
import {Form} from "../../elements/Form";
import {ReqInput} from "../../elements/Input";
import photosPageStories from "../../../stories/pages/PhotosPage.stories";

type PhotosProps = {
    onNext: () => void,
    onBack: () => void,
}

 export const PhotosPage = ({ onNext, onBack }: PhotosProps ) => {

    const { photosContent, setPhotosContent } = useContext(FormContext)

    const [uploads, setUploads] = useState<{
        url: string,
        name: string,
        size: number,
    }[]>([],)

     useEffect(() => setUploads(photosContent), [photosContent])


     const [formInProgress, setFormInProgress] = useState<boolean>(true)
     useEffect(() => checkFormProgress(), [uploads])

     const checkFormProgress = () => {
         setFormInProgress(uploads.length > 0 ? false : true)
     }

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

    const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
         e.preventDefault()
         setPhotosContent(uploads)
         onBack()
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setPhotosContent(uploads)
        onNext()
    }

    return (
        <PageContainer>
            <PhotosForm onSubmit={(e) => handleSubmit(e)}>
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
                <ButtonContainer>
                    <Button onClick={(e) => handleBack(e)}>Back</Button>
                    <Button disabled={false} type='submit'>Next →</Button>
                </ButtonContainer>
            </PhotosForm>
        </PageContainer>
    )
}

 const InstructionsText = styled.h4`
    text-align: left;
    margin-left: 2rem;
`

 const PhotosContainer = styled.div`
    margin: auto;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    width: 95%;
    min-height: 445px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    border: 2px dotted #D7D7D7;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
  
     @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
    
`

 const UploadSection = styled.div`
    width: 10rem;
    
    @media only screen and (max-width: 600px) {
        margin: auto;
    }
`

 const Label = styled.label`
    margin: 1rem;
    width: 8rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    border: 3px solid #2D5BFF;
    border-radius: 8px;
       
    p {
        margin: auto;
        width: 60px;
        overflow-wrap: wrap;
    }
    &:hover {
        cursor: pointer;
    }
`

 const Icon = styled.img`
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 0;
    width: 1rem;
    height: 1rem;
`

 const UploadInfo = styled.h4`
    color: #5C5C5C;
    font-weight: 400;
    font-size: 12px;
    margin: auto;
    margin-top: -2rem;
    width: 100px;
`

 const PhotosUploaded = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
`

 const PhotoBox = styled.div`
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

 const Photo = styled.img`
    margin: 10px;
    margin-bottom: 1rem;
    width: 7rem;
    height: 7rem;
    display: flex;
    flex-direction: column;
`

 const PhotoDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 8rem;
    text-align: left;
    
    * {
        margin: 0;
    }
`

 const TrashContainer = styled.div`
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

 const Name = styled.h4`
    font-weight: 700;
    font-size: 12px;
`

 const Size = styled.h4`
    margin-top: 5px;
    color: #5C5C5C;
    font-weight: 400;
    font-size: 12px;
`

const PhotosForm = styled(Form)``
