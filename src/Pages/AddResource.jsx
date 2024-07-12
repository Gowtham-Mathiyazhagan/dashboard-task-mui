import { Box, Typography } from '@mui/material'
import React from 'react'
import { headLineTypo } from '../theme/customThemeData'
import GroupTextField from '../Components/GroupTextField'

const AddResource = () => {
  return (
<>
<Box display="flex" flexDirection='column' gap={5} >
  <Typography variant="h5" sx={headLineTypo}>add resource</Typography>
  <GroupTextField/>
</Box>
</>
  )
}

export default AddResource