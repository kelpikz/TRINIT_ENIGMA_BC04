import {  useRef } from 'react';
import { Button, FormControl, FormErrorMessage, FormLabel, Icon, InputGroup } from '@chakra-ui/react';
import { useForm, } from 'react-hook-form';
import { FiFile } from 'react-icons/fi';
import { encryptFile } from '../utils/encAndDec';
import { IPFSAdd, IPFSGet } from '../utils/ipfs';


const FileUpload = (props) => {
  const { register, accept, multiple, children } = props;
  const inputRef = useRef(null)
  const { ref, ...rest } = register || {}

  const handleClick = () => inputRef.current?.click()

  return (
      <InputGroup onClick={handleClick}>
        <input
          type={'file'}
          multiple={multiple || false}
          hidden
          accept={accept}
          {...rest}
          ref={(e) => {
            ref(e);
            inputRef.current = e;
          }}
        />
        <>
          {children}
        </>
      </InputGroup>
  )
}


export const FileUploadCmpt = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = handleSubmit(async(data) => {
    console.log(data.file_[0])
    const enc = await encryptFile(data.file_[0], 'test')
    await IPFSAdd(enc)
  })

  const validateFiles = (value) => {
    if (value.length < 1) {
      return 'Files is required'
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024)
      const MAX_FILE_SIZE = 10
      if (fsMb > MAX_FILE_SIZE) {
        return 'Max file size 10mb'
      }
    }
    return true
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl isInvalid={!!errors.file_} isRequired>
          <FormLabel>{'File input'}</FormLabel>

          <FileUpload
            accept={'**'}
            multiple
            register={register('file_', { validate: validateFiles })}
          >
            <Button leftIcon={<Icon as={FiFile} />}>
              Upload
            </Button>
          </FileUpload>

          <FormErrorMessage>
            {errors.file_ && errors?.file_.message}
          </FormErrorMessage>
        </FormControl>

        <button>Submit</button>
      </form>
    </>
  )
};