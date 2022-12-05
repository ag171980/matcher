import { useState } from 'react';
import { FaRedoAlt } from 'react-icons/fa';

type Props = {
    modalState: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
    setUiState: React.Dispatch<React.SetStateAction<boolean>>
    user:any
};

const SwiperDescription = ({ modalState, setModalState, setUiState,user }: Props) => {
    const [activeClass, SetActiveClass] = useState<boolean>(false)

    const handleClose = () => {
        SetActiveClass(true)
        setUiState(true)
        setTimeout(() => {
            setModalState(false)
        }, 300)
        setTimeout(() => {
            SetActiveClass(false)
        }, 350)
    }

    return (
        <>
        {modalState ?
        <>
        <div className={activeClass ? "descriptionModal fadeInModal active"
        : "descriptionModal fadeInModal"}>
            <div className="absolute top-4 left-5 text-[#ed3434]">
                <div className="flex flex-col items-start gap-[0.15rem] md:gap-1 noSelect">
                    <h1 className='font-extrabold text-xl md:text-2xl'>{user.name}</h1>
                    <h3 className='font-extrabold text-lg md:text-xl'>{user.age} años</h3>
                    {/* <div className="flex gap-1 items-center justify-center">
                        <FaMapMarkerAlt className='textShadowSm' size={19} />
                        <p className='font-semibold text-base md:text-lg'>San Antonio</p>
                    </div>
                    <p className='font-medium text-sm'>Estudiante de Turismo</p> */}
                </div>
            </div>
            <div className='grid place-items-center h-36 md:h-60 mt-14 md:mt-16 overflow-y-auto break-words
            scrollbar-thin scrollbar-track-[#ed3434]/30 scrollbar-thumb-[#ed3434]/90 w-[90%] pr-6
            pl-[0.4rem] md:pl-0'>
                <p className='text-sm font-medium'>
                    {user.description}
                </p>
            </div>
            <button type='button' className='absolute bottom-6 left-1/2 btnSubmitGradient textShadowSm
            btnTransition btnShadow shadow-md text-[#FFEAEA] rounded-full -translate-x-1/2 px-3 py-3'
            onClick={() => handleClose()}>
                <FaRedoAlt className='-scale-x-100 -rotate-6 text-base md:text-xl'/>
            </button>
        </div>
        </>
        : null}
        </>
    )
}

export default SwiperDescription;