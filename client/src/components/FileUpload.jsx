import React, {useContext} from 'react';
// import { Button, FormControl, FormErrorMessage, FormLabel, Icon, InputGroup } from '@chakra-ui/react';
// import { useForm, } from 'react-hook-form';
// import { FiFile } from 'react-icons/fi';
import { encryptFile } from '../utils/encAndDec';
import { Web3Context } from "../context/Web3Context";
import { IPFSAdd } from '../utils/ipfs';
import { toast } from './Toast/useToast';


// const FileUpload = (props) => {
//   const { register, accept, multiple, children } = props;
//   const inputRef = useRef(null)
//   const { ref, ...rest } = register || {}

//   const handleClick = () => inputRef.current?.click()

//   return (
//       <InputGroup onClick={handleClick}>
//         <input
//           type={'file'}
//           multiple={multiple || false}
//           hidden
//           accept={accept}
//           {...rest}
//           ref={(e) => {
//             ref(e);
//             inputRef.current = e;
//           }}
//         />
//         <>
//           {children}
//         </>
//       </InputGroup>
//   )
// }


// export const FileUploadCmpt = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm()
//   const onSubmit = handleSubmit(async(data) => {
//     console.log(data.file_[0])
//     const enc = await encryptFile(data.file_[0], 'test')
//     await IPFSAdd(enc)
//   })

//   const validateFiles = (value) => {
//     if (value.length < 1) {
//       return 'Files is required'
//     }
//     for (const file of Array.from(value)) {
//       const fsMb = file.size / (1024 * 1024)
//       const MAX_FILE_SIZE = 10
//       if (fsMb > MAX_FILE_SIZE) {
//         return 'Max file size 10mb'
//       }
//     }
//     return true
//   }

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <FormControl isInvalid={!!errors.file_} isRequired>
//           <FormLabel>{'File input'}</FormLabel>

//           <FileUpload
//             accept={'**'}
//             multiple
//             register={register('file_', { validate: validateFiles })}
//           >
//             <Button leftIcon={<Icon as={FiFile} />}>
//               Upload
//             </Button>
//           </FileUpload>

//           <FormErrorMessage>
//             {errors.file_ && errors?.file_.message}
//           </FormErrorMessage>
//         </FormControl>

//         <button>Submit</button>
//       </form>
//     </>
//   )
// };

export const FileUpload = () => {
    const { accts, ins } = useContext(Web3Context);

    if (ins && ins.events) {
        ins.events
      	.uploadDocumentResponse()
      	.on("data", (e) => {
			  if(e.returnValues.success){
 				toast.success(e.returnValues.message);
			  }else{
				toast.error(e.returnValues.message);
			  }
		  });
    }

    const submit = async(e) => {
        e.preventDefault()
        const key = localStorage.getItem('passkey')
        if(e.target.getElementsByClassName('sr-only')[0].files[0]){
            try {
                const enc = await encryptFile(e.target.getElementsByClassName('sr-only')[0].files[0], key)
                const ipfsHash = await IPFSAdd(enc);
                await ins.methods.uploadDocument(ipfsHash,"aadhar").send({from: accts[0]});;
                toast.success("successfully uploaded aadhar document");
            } catch (error) {
                console.log(error);
                toast.error("error uploading aadhar document");
            }

        }
        if(e.target.getElementsByClassName('sr-only')[1].files[0]){
            try {
                const enc = await encryptFile(e.target.getElementsByClassName('sr-only')[1].files[0], key)
                const ipfsHash = await IPFSAdd(enc);
                await ins.methods.uploadDocument(ipfsHash,"pan").send({from: accts[0]});;
                toast.success("successfully uploaded birth certificate");
            } catch (error) {
                console.log(error);
                toast.error("error uploading birth certificate");
            }

        }
        if(e.target.getElementsByClassName('sr-only')[2].files[0]){
            try {
                const enc = await encryptFile(e.target.getElementsByClassName('sr-only')[2].files[0], key)
                const ipfsHash = await IPFSAdd(enc)
                await ins.methods.uploadDocument(ipfsHash,"10th").send({from: accts[0]});;
                toast.success("successfully uploaded Xth certificate");
            } catch (error) {
                console.log(error);
                toast.error("error uploading Xth certificate");
            }

        }
        if(e.target.getElementsByClassName('sr-only')[3].files[0]){
            try {
                const enc = await encryptFile(e.target.getElementsByClassName('sr-only')[2].files[0], key)
                const ipfsHash = await IPFSAdd(enc)
                await ins.methods.uploadDocument(ipfsHash,"12th").send({from: accts[0]});;
            } catch (error) {
                console.log(error);
                toast.error("error uploading Xth certificate");
            }
        }
    }

    return (
        <div className="w-3/5 m-auto p-6">
            <h1 className="text-6xl m-auto text-text text-center font-bold">Enigma Forms</h1>
            <br/>
            <form onSubmit={submit}>
            <div className="m-auto">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor="file-upload-1"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span>Upload your Aadhar</span>
                                <input
                                    id="file-upload-1"
                                    name="file-upload-1"
                                    type="file"
                                    className="sr-only"
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF, TXT up to 10MB</p>
                    </div>
                </div>
            
                
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor="file-upload-2"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span>Upload your Birth Certificate</span>
                                <input
                                    id="file-upload-2"
                                    name="file-upload-2"
                                    type="file"
                                    className="sr-only"
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF, TXT up to 10MB</p>
                    </div>
                </div>

                
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor="file-upload-3"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span>Upload your X-certificate</span>
                                <input
                                    id="file-upload-3"
                                    name="file-upload-3"
                                    type="file"
                                    className="sr-only"
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF, TXT up to 10MB</p>
                    </div>
                </div>

                
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label
                                htmlFor="file-upload-4"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                                <span>Upload your XII-certificate</span>
                                <input
                                    id="file-upload-4"
                                    name="file-upload-4"
                                    type="file"
                                    className="sr-only"
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF, TXT up to 10MB</p>
                    </div>
                </div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 rounded-md">
                    <div className="space-y-1 text-center">
                        <input type="submit" value="Submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
}