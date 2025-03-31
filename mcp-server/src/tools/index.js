/**
 * tools/index.js
 * Export all Task Master CLI tools for MCP server
 */

import logger from "../logger.js";
import { registerListTasksTool } from "./list-tasks.js";
import { registerSetTaskStatusTool } from "./set-task-status.js";
import { registerParsePRDTool } from "./parse-prd.js";
import { registerUpdateTool } from "./update.js";
import { registerUpdateTaskTool } from "./update-task.js";
import { registerUpdateSubtaskTool } from "./update-subtask.js";
import { registerGenerateTool } from "./generate.js";

/**
 * Register all Task Master tools with the MCP server
 * @param {Object} server - FastMCP server instance
 */
export function registerTaskMasterTools(server) {
  registerListTasksTool(server);
  registerSetTaskStatusTool(server);
  registerParsePRDTool(server);
  registerUpdateTool(server);
  registerUpdateTaskTool(server);
  registerUpdateSubtaskTool(server);
  registerGenerateTool(server);
}

export default {
  registerTaskMasterTools,
};
