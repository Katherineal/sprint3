"use client"
import '../styles/Icon.css'
import * as React from "react";
import { FaRegUser,
    FaArrowLeft,
    FaRegFileAlt,
    FaFileInvoiceDollar,
    FaChevronDown,
    FaTimes,
    FaKey,
    FaExclamationTriangle,
    FaEnvelope,
    FaQuestion,
    FaMobileAlt,
    FaCircle,
    FaInbox,
    FaDollarSign,
    FaHeadset,
    FaSignOutAlt,
    FaBell,
    FaHeart,
    FaChartLine,
    FaRegFile,
    FaLifeRing,
    FaShoppingBag,
    FaExchangeAlt,
    FaDownload,
    FaShieldAlt,
    FaRegMoneyBillAlt,
    FaUserFriends,
    FaRegEyeSlash,
    FaRegEye,
    FaCalendar,
    FaFacebookSquare,
    FaInstagram,
    FaBars,
    FaTwitter,
    FaSearch
} from "react-icons/fa";
import { BiLock,
    BiQuestionMark,
    BiPencil,BiDollarCircle,
    BiSortAlt2,
    BiArchiveIn,
    BiCheckSquare
 } from "react-icons/bi";



export function Icon({ className, dataTestId, onClick, style, type }) {

    const icons = (type) => {
        switch (type) {
            case "user": {
                return <FaRegUser />;
            }
            case "password": {
                return <BiLock />;
            }
            case "arrowLeft":{
                return <FaArrowLeft />
            }
            case "edit":{
                return <BiPencil />
            }
            case "file":{
                return <FaRegFileAlt />
            }
            case "fileAlt":{
                return <FaRegFile />
            }
            case "fileInvoiceDollar":{
                return <FaFileInvoiceDollar />
            }
            case"chevronDown":{
                return <FaChevronDown />
            }
            case "cross":{
                return <FaTimes />
            }
            case "key":{
                return <FaKey />
            }
            case "exclamationTriangle":{
                return <FaExclamationTriangle />
            }
            case "envelope":{
                return <FaEnvelope />
            }
            case "question":{
                return <FaQuestion />
            }
            case "mobile":{
                return <FaMobileAlt />
            }
            case "point":{
                return <FaCircle />
            }
            case "inbox":{
                return <FaInbox />
            }
            case "dollar":{
                return <FaDollarSign />
            }
            case "headSet":{
                return <FaHeadset />
            }
            case "bell":{
                return <FaBell />
            }
            case "signOut":{
                return <FaSignOutAlt />
            }
            case "heart":{
                return <FaHeart />
            }
            case "BiDollarCircle":{
                return <BiDollarCircle />
            }
            case "BiSortAlt2":{
                return <BiSortAlt2 />
            }
            case "BiArchiveIn":{
                return <BiArchiveIn />
            }
            case "chartLine":{
                return <FaChartLine />
            }
            case "life":{
                return <FaLifeRing />
            }
            case "shop":{
                return <FaShoppingBag />
            }
            case "move":{
                return <FaExchangeAlt />
            }
            case "download":{
                return <FaDownload />
            }
            case "shield":{
                return <FaShieldAlt />
            }
            case "money":{
                return <FaRegMoneyBillAlt />
            }
            case "friend":{
                return <FaUserFriends />
            }
            case "CheckSquare":{
                return <BiCheckSquare />
            }
            case "eyeSlash":{
                return <FaRegEyeSlash />
            }
            case "eye":{
                return <FaRegEye />
            }
            case "calendar":{
                return <FaCalendar />
            }
            case "search": {
                return <FaSearch />;
            }
            case "facebook": {
                return <FaFacebookSquare />;
            }
            case "instagram": {
                return <FaInstagram />;
            }
            case "twitter": {
                return <FaTwitter />;
            }
            case "bar": {
                return <FaBars />;
            }
            default: {
                return <BiQuestionMark />;
            }
        }
    };

    return (
        <div
            role="presentation"
            aria-hidden="true"
            className={className}
            data-testid={dataTestId}
            onClick={onClick}
            style={style}
            tabIndex={-1}
        >
            {icons(type)}
        </div>
    )
}


