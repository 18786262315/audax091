
const zoomsize = 0.8
const unit_type_list =  [
    {
      name: "2 BEDROOM",
      color: "#D4EFFC",
      to_type: [
        {
          name: "TYPE A1 - 51 SQM",
          type: "A1",
          color: "#D4EFFC",
          imgnames:49,
          typecls: [
            { w: '3.5%', h: '4%', x: '46.5%', y: '28.5%', color: '#D4EFFC',type:"A1",img:"3" },
            { w: '3.5%', h: '19.5%', x: '46.5%', y: '38%', color: '#D4EFFC',type:"A1",img:"3" },
          ],
        },
        {
          name: "TYPE A2 - 53 SQM",
          type: "A2",
          color: "#D4EFFC",
          imgnames:49,
          typecls: [
            { w: '3.8%', h: '28.5%', x: '50.2%', y: '28.5%', color: '#D4EFFC',type:"A2" },
          ],
        },
        {
          name: "TYPE A3 - 60 SQM",
          type: "A3",
          color: "#D4EFFC",
          imgnames:16,
          typecls: [
            { w: '6%', h: '3.5%', x: '48.5%', y: '27.5%', color: '#D4EFFC',type:"A3" },
            { w: '6%', h: '20.5%', x: '48.5%', y: '37.2%', color: '#D4EFFC',type:"A3" },
          ],
        },
        {
          name: "TYPE A4 - 61 SQM",
          type: "A4",
          color: "#D4EFFC",
          imgnames:3,
          typecls: [
            { w: '4.5%', h: '4.5%', x: '44.5%', y: '26.5%', color: '#FEE0C9',type:"A4" },
            { w: '4.5%', h: '20.5%', x: '44.5%', y: '37.5%', color: '#FEE0C9',type:"A4" }
          ],
        },
      ],
    },
    {
      name: "3 BEDROOM (DUAL KEY)",
      color: "#FEE0C9",
      to_type: [
        {
          name: "TYPE B - 76 SQM",
          type: "B",
          color: "#FEE0C9",
          imgnames:2,
          typecls: [
            { w: '4.5%', h: '4.5%', x: '50.5%', y: '26.5%', color: '#FEE0C9',type:"B" },
            { w: '4.5%', h: '20.5%', x: '50.5%', y: '37.5%', color: '#FEE0C9',type:"B" }
          ],
        },
      ],
    },
     {
      name: "3 BEDROOM",
      color: "#FFF9B8",
      to_type: [
        {
          name: "TYPE C - 80 SQM",
          type: "C",
          color: "#FFF9B8",
          imgnames:49,
          typecls: [
            { w: '5%', h: '7.5%', x: '41.5%', y: '50%', color: '#FFF9B8',type:"C" },
          ],
        },
      ],
    },


    {
      name: "4 BEDROOM + UTILITY",
      color: "#FACAD0",
      to_type: [
        {
          name: "TYPE D - 121 SQM",
          type: "D",
          color: "#FACAD0",
          imgnames:49,
          typecls: [
            { w: '7%', h: '4%', x: '39.5%', y: '28.5%', color: '#FACAD0',type:"D" },
            { w: '6.5%', h: '11.5%', x: '40%', y: '38%', color: '#FACAD0',type:"D" },
          ],
        },
      ],
    },
    {
      name: "4 BEDROOM (DUPLEX)",
      color: "#D3BFDD",
      to_type: [
        {
          name: "TYPE E1 - 111 SQM",
          type: "E1",
          color: "#D3BFDD",
          imgnames:2,
          typecls: [
            { w: '5%', h: '4.5%', x: '44%', y: '31.5%', color: '#D3BFDD',type:"E1" },
          ],
        },
        {
          name: "TYPE E2 - 111 SQM",
          type: "E2",
          color: "#D3BFDD",
          imgnames:2,
          typecls: [
            { w: '5%', h: '4.5%', x: '50.5%', y: '31.5%', color: '#D3BFDD',type:"E2" },
            
          ],
        },
      ],
    },
  ]






export default {
    unit_type_list,
    zoomsize


};





