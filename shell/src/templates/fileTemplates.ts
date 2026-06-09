/**
 * Default content templates for quick-create file types
 */

export interface FileTemplate {
  extension: string;
  displayName: string;
  icon: string; // Lucide icon name
  getDefaultContent: () => string;
}

export const FILE_TEMPLATES: FileTemplate[] = [
  {
    extension: 'agents',
    displayName: 'Agent Workspace',
    icon: 'Bot',
    getDefaultContent: () => {
      const now = new Date().toISOString();
      return JSON.stringify(
        {
          name: 'New Workspace',
          description: '',
          version: '1.0',
          templates: [],
          queue: [],
          history: [],
          historyLimit: 100,
          createdAt: now,
          updatedAt: now,
        },
        null,
        2
      );
    },
  },
  {
    extension: 'airplane',
    displayName: 'Airplane Physics',
    icon: 'Plane',
    getDefaultContent: () => {
      return JSON.stringify(
        {
          forces: {
            lift: 10000,
            weight: 10000,
            thrust: 2000,
            drag: 2000,
          },
          bankAngle: 0,
          showComponents: true,
          showNetForce: true,
        },
        null,
        2
      );
    },
  },
];

export function getTemplateByExtension(ext: string): FileTemplate | undefined {
  return FILE_TEMPLATES.find((t) => t.extension === ext);
}
