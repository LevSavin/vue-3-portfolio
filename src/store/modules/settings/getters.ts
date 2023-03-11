export default {
  lang: ({ lang }: { lang: string }) => lang,

  isAsideCollapsed: ({ isAsideCollapsed }: { isAsideCollapsed: boolean }) =>
    isAsideCollapsed,

  isMobile: ({ isMobile }: { isMobile: boolean }) => isMobile,

  showAside: ({ showAside }: { showAside: boolean }) => showAside,
};
