import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { nav, servicesMenu, moreMenu } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const servicesCloseTimer = useRef(null);
  const moreCloseTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
    setMobileMoreOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const openMore = () => {
    if (moreCloseTimer.current) clearTimeout(moreCloseTimer.current);
    setMoreOpen(true);
  };
  const scheduleCloseMore = () => {
    moreCloseTimer.current = setTimeout(() => setMoreOpen(false), 150);
  };

  const isActive = (href) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);
  const isServicesActive = location.pathname.startsWith("/services");
  const isMoreActive = ["/impact", "/media", "/blog"].some(
    (path) => location.pathname === path || location.pathname.startsWith(path),
  );

  const linkClass = (active) =>
    `text-sm transition-colors duration-200 ${
      active ? "text-white" : "text-white/75 hover:text-white"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ease-editorial ${
          scrolled
            ? "bg-navy/95 border-b border-white/10 backdrop-blur-md"
            : "bg-navy"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="font-display text-xl text-white tracking-wide"
          >
            {nav.brand}
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {nav.pillars.map((item) => {
              const active = isActive(item.href);
              const label = item.label.toLowerCase();

              if (label === "services") {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <button
                      className={`flex items-center gap-1 ${linkClass(
                        isServicesActive,
                      )}`}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                    >
                      {servicesMenu.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                      {isServicesActive && (
                        <span className="absolute left-0 -bottom-1.5 h-px w-full bg-terracotta" />
                      )}
                    </button>

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ease-editorial ${
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="w-80 bg-white rounded-sm border border-stroke shadow-card p-3">
                        {servicesMenu.items.map((svc) => (
                          <Link
                            key={svc.name}
                            to={svc.href}
                            className="group flex items-start justify-between gap-3 rounded-sm px-4 py-3 hover:bg-alabaster transition-colors duration-150"
                          >
                            <span>
                              <span className="block text-sm font-medium text-slate">
                                {svc.name}
                              </span>
                              <span className="block text-xs text-slate-muted mt-0.5">
                                {svc.description}
                              </span>
                            </span>
                            <ChevronRight
                              size={14}
                              className="mt-1 shrink-0 text-slate-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150"
                            />
                          </Link>
                        ))}
                        <Link
                          to={servicesMenu.viewAllHref}
                          className="block text-xs font-medium text-terracotta mt-2 pt-2 border-t border-stroke px-4 hover:text-terracotta/80"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              }

              if (label === "more") {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={openMore}
                    onMouseLeave={scheduleCloseMore}
                  >
                    <button
                      className={`flex items-center gap-1 ${linkClass(
                        isMoreActive,
                      )}`}
                      onClick={() => setMoreOpen((v) => !v)}
                      aria-expanded={moreOpen}
                    >
                      {moreMenu.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          moreOpen ? "rotate-180" : ""
                        }`}
                      />
                      {isMoreActive && (
                        <span className="absolute left-0 -bottom-1.5 h-px w-full bg-terracotta" />
                      )}
                    </button>

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ease-editorial ${
                        moreOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="w-80 bg-white rounded-sm border border-stroke shadow-card p-3">
                        {moreMenu.items.map((menuItem) => (
                          <Link
                            key={menuItem.name}
                            to={menuItem.href}
                            className="group flex items-start justify-between gap-3 rounded-sm px-4 py-3 hover:bg-alabaster transition-colors duration-150"
                          >
                            <span>
                              <span className="block text-sm font-medium text-slate">
                                {menuItem.name}
                              </span>
                              <span className="block text-xs text-slate-muted mt-0.5">
                                {menuItem.description}
                              </span>
                            </span>
                            <ChevronRight
                              size={14}
                              className="mt-1 shrink-0 text-slate-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link to={item.href} className={linkClass(active)}>
                    {item.label}
                    {active && (
                      <span className="block h-px w-full bg-terracotta mt-1.5" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to={nav.cta.href}
            className="hidden lg:inline-flex items-center rounded-sm bg-terracotta px-5 py-2.5 text-sm font-medium text-white hover:bg-terracotta/90 transition-colors duration-200"
          >
            {nav.cta.label}
          </Link>

          <button
            aria-label="Open menu"
            className="lg:hidden text-white"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-navy/60"
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-navy px-6 py-6 shadow-xl overflow-y-auto transition-transform duration-300 ease-editorial ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="font-display text-lg text-white">{nav.brand}</span>
            <button
              aria-label="Close menu"
              className="text-white"
              onClick={() => setDrawerOpen(false)}
            >
              <X size={22} />
            </button>
          </div>
          <ul className="flex flex-col gap-1">
            {nav.pillars.map((item) => {
              const label = item.label.toLowerCase();

              if (label === "services") {
                return (
                  <li key={item.href}>
                    <button
                      className="w-full flex items-center justify-between text-white/85 text-base py-2.5"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                    >
                      {servicesMenu.label}
                      <span className="text-lg leading-none">
                        {mobileServicesOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-editorial ${
                        mobileServicesOpen ? "max-h-60" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 border-l border-white/10 flex flex-col gap-1 pb-2">
                        {servicesMenu.items.map((svc) => (
                          <li key={svc.name}>
                            <Link
                              to={svc.href}
                              onClick={() => setDrawerOpen(false)}
                              className="block text-white/70 text-sm py-2"
                            >
                              {svc.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            to={servicesMenu.viewAllHref}
                            onClick={() => setDrawerOpen(false)}
                            className="block text-terracotta text-sm py-2"
                          >
                            View All Services →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              }

              if (label === "more") {
                return (
                  <li key={item.href}>
                    <button
                      className="w-full flex items-center justify-between text-white/85 text-base py-2.5"
                      onClick={() => setMobileMoreOpen((v) => !v)}
                      aria-expanded={mobileMoreOpen}
                    >
                      {moreMenu.label}
                      <span className="text-lg leading-none">
                        {mobileMoreOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-editorial ${
                        mobileMoreOpen ? "max-h-60" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 border-l border-white/10 flex flex-col gap-1 pb-2">
                        {moreMenu.items.map((menuItem) => (
                          <li key={menuItem.name}>
                            <Link
                              to={menuItem.href}
                              onClick={() => setDrawerOpen(false)}
                              className="block text-white/70 text-sm py-2"
                            >
                              {menuItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block text-white/85 text-base py-2.5"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            to={nav.cta.href}
            onClick={() => setDrawerOpen(false)}
            className="mt-6 inline-flex items-center rounded-sm bg-terracotta px-5 py-2.5 text-sm font-medium text-white"
          >
            {nav.cta.label}
          </Link>
        </div>
      </div>
    </>
  );
}
