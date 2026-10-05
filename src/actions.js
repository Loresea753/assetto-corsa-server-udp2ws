const actions = [
  { name: 'get_car_info', command: 'getCarInfo' },
  { name: 'get_session_info', command: 'getSessionInfo' },
  { name: 'enable_realtime_report', command: 'enableRealtimeReport' },
  { name: 'enable_enhanced_reporting', command: 'enableEnhancedReporting' },
  { name: 'request_ping', command: 'requestPing' }
]

const adminActions = [
  { name: 'admin_command', command: 'adminCommand' },
  { name: 'broadcast_message', command: 'broadcastMessage' },
  { name: 'kick_user', command: 'kickUser' },
  { name: 'next_session', command: 'nextSession' },
  { name: 'restart_session', command: 'restartSession' },
  { name: 'send_message', command: 'sendMessage' },
  { name: 'set_session_info', command: 'setSessionInfo' }
]

export default {
  public: actions,
  private: adminActions,
  all: [...actions, ...adminActions]
}
