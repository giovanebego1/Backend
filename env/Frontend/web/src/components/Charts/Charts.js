import React from 'react';
import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, Legend,
DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';
import {salseData} from "../../Data/Data"
import './Charts.css';

function Charts() {
  return (
    <div className="chart_container">
      <div className="chart">
        <ChartComponent primaryXAxis={{valueType: "Category", title:"Month"}} title="Expend Analysis"
        primaryYAxis={{title:"Expends"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
          <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={salseData} xName="month" yName="expend" type="Line" name="Expends" 
            marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default Charts;
