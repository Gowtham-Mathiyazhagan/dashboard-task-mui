import { Box, Typography } from '@mui/material'
import React from 'react'
import CardDashboard from '../Components/CardDashboard'
import BasicTable from '../Components/BasicTable'
import ChartData from '../Components/ChartData'
import { dashboardTable } from '../Data/data'
import { headLineTypo } from '../theme/customThemeData'

const Dashboard = () => {
  return (
<>
<Box display="flex" flexDirection='column' gap={5}>
  <Typography variant="h5" sx={headLineTypo}>dashboard</Typography>
  <CardDashboard/>
  <BasicTable props={dashboardTable}/>
  <ChartData />
</Box>
</>
  )
}

export default Dashboard