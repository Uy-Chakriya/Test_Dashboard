import { LineChart, lineClasses } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';

const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Mon',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
  //  'Mon',
  // 'Thu',
  // 'Wed',
  // 'Thu',
  // 'Fri',
  // 'Sat',
  // 'Sun',
];

export default function StackedAreaChart() {
  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <LineChart
        series={[
          { data: uData, label: 'On_Time', area: true, stack: 'total' },
          { data: pData, label: 'Late Submis', area: true, stack: 'total' },
      
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels, height: 28 }]}
        yAxis={[{ width: 50 }]}
        sx={{
          [`& .${lineClasses.line}`]: {
            display: 'none',
          },
        }}
        margin={margin}
      />
    </Box>
  );
}
