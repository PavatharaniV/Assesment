import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardIncident from '../components/CardIncident'
import IncidentCharts from '../components/InncidentCharts'
import { Colors } from '../constants/Colors';

const Calibrations = [
  { name: 'Callibrated', count: 247, color: Colors.gray1 },
  { name: 'Non Callibrated', count: 12, color: Colors.gray2 },
  { name: 'Not Required', count: 28, color:  Colors.gray3 },
];

const AMC = [
  { name: 'AMC', count: 213, color: Colors.gray1 },
  { name: 'CMCd', count: 43, color: Colors.gray2 },
];

const Warranty = [
  { name: 'Total', count: 267, color: Colors.gray1 },
  { name: 'Requested', count: 10, color: Colors.gray2 },
  { name: 'Expires soon', count: 28, color:  Colors.orange },
];

const Incidents = () => {
  return (
    <View>
      <CardIncident />
      <IncidentCharts
        title="Calibrations"
        subtitle="No. of raised incidents"
        data={Calibrations}
        buttonText="Request"
        dues={'2'}

      />

      <IncidentCharts
        title="AMC/CMC"
        subtitle="No. of raised incidents"
        data={AMC}
        buttonText="Request"
        dues={'0'}

      />

      <IncidentCharts
        title="Warranty"
        subtitle="No. of raised incidents"
        data={Warranty}
        buttonText="Request"
        dues={'3'}
      />
    </View>
  )
}

export default Incidents

const styles = StyleSheet.create({})