import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import GTranslateOutlinedIcon from '@material-ui/icons/GTranslateOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import PlusOneOutlinedIcon from '@material-ui/icons/PlusOneOutlined';

const renderIcon = (param) => {
  switch (param.toLowerCase()) {
    case 'visa subclass':
      return <AssignmentOutlinedIcon />;
    case 'age':
      return <FaceOutlinedIcon />;
    case 'english language':
      return <LanguageOutlinedIcon />;
    case 'overseas work experience':
      return <WorkOutlineOutlinedIcon />;
    case 'australian work experience':
      return <WorkOutlinedIcon />;
    case 'educational qualifications':
      return <SchoolOutlinedIcon />;
    case 'australian educational qualification':
      return <LocalLibraryOutlinedIcon />;
    case 'specialist educational qualification':
      return <CollectionsBookmarkOutlinedIcon />;
    case 'accredited community language':
      return <GTranslateOutlinedIcon />;
    case 'partner qualifications':
      return <GroupOutlinedIcon />;
    case 'professional year in australia':
      return <PlusOneOutlinedIcon />;
    default:
      return <HelpIcon />;
  }
}


export default function CategoryIcon({category}) {
  return (
    <div>
      {renderIcon(category)}
    </div>
  )
}