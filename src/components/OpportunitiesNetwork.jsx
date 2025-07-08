import CytoscapeComponent from 'react-cytoscapejs';
import { useMemo } from 'react';

export default function OpportunitiesNetwork() {
  const elements = useMemo(() => {
    const nodes = [];
    const edges = [];
    const totalNodes = 55;
    const types = ['student', 'mentor', 'industry'];

    // Create nodes with types
    for (let i = 0; i < totalNodes; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      nodes.push({ data: { id: `N${i}`, type } });
    }

    // Ensure every node has at least one connection
    for (let i = 0; i < totalNodes; i++) {
      const target = `N${Math.floor(Math.random() * totalNodes)}`;
      if (`N${i}` !== target) {
        edges.push({ data: { source: `N${i}`, target } });
      }
    }

    // Add extra random edges
    for (let i = 0; i < 100; i++) {
      const source = `N${Math.floor(Math.random() * totalNodes)}`;
      const target = `N${Math.floor(Math.random() * totalNodes)}`;
      if (source !== target) {
        edges.push({ data: { source, target } });
      }
    }

    return [...nodes, ...edges];
  }, []);

  return (
    <div className="w-[500px] h-[500px]">
      <CytoscapeComponent
        elements={elements}
        style={{ width: '100%', height: '100%' }}
        layout={{ name: 'cose', animate: true, animationDuration: 1000 }}
        stylesheet={[
          {
            selector: 'node[type="student"]',
            style: {
              'background-color': '#bd0427',
            },
          },
          {
            selector: 'node[type="mentor"]',
            style: {
              'background-color': '#f58044', 
            },
          },
          {
            selector: 'node[type="industry"]',
            style: {
              'background-color': '#fdb249', 
            },
          },
          {
            selector: 'node',
            style: {
              'label': '',
              'width': 7,
              'height': 7,
              'opacity': 0.8,
            },
          },
          {
            selector: 'edge',
            style: {
              'width': 0.5,
              'line-color': '#ffffff',
              'opacity': 0.5,
            },
          },
        ]}
      />
    </div>
  );
}
