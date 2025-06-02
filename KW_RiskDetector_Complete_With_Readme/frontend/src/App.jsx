import { Card, CardContent } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="mb-4">KW RiskDetector - Smart Claims Automation & Fraud Detection</h1>
      <Tabs defaultActiveKey="dashboard" id="tabs">
        <Tab eventKey="dashboard" title="Dashboard">
          <Card className="mt-3">
            <CardContent>
              <h2>Automation Rate Overview</h2>
              <ProgressBar now={78} label={`78%`} />
              <p>Current Automation Rate: 78%</p>
            </CardContent>
          </Card>
        </Tab>
        <Tab eventKey="upload" title="Upload">
          <Card className="mt-3">
            <CardContent>
              <h2>Upload Claim Documents</h2>
              <InputGroup>
                <FormControl type="file" multiple />
              </InputGroup>
              <Button className="mt-2">Simulate Processing</Button>
            </CardContent>
          </Card>
        </Tab>
        <Tab eventKey="triage" title="Triage">
          <Card className="mt-3">
            <CardContent>
              <h2>Document Triage Results</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Type</th>
                    <th>Confidence</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>invoice_001.pdf</td>
                    <td>Medical Invoice</td>
                    <td>93%</td>
                    <td>Auto-Approved</td>
                  </tr>
                  <tr>
                    <td>receipt_002.jpg</td>
                    <td>Pharmacy Receipt</td>
                    <td>68%</td>
                    <td>Manual Review</td>
                  </tr>
                </tbody>
              </Table>
            </CardContent>
          </Card>
        </Tab>
        <Tab eventKey="fraud" title="Anomalies">
          <Card className="mt-3">
            <CardContent>
              <h2>Anomaly & Fraud Detection</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Claim ID</th>
                    <th>Issue</th>
                    <th>Fraud Score</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#10221</td>
                    <td>Duplicate Invoice Detected</td>
                    <td>91%</td>
                    <td>Cross-reference with claim #10119.</td>
                  </tr>
                  <tr>
                    <td>#10235</td>
                    <td>Excessive Claim Frequency</td>
                    <td>88%</td>
                    <td>5 claims in 10 days from same provider.</td>
                  </tr>
                </tbody>
              </Table>
            </CardContent>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}