import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { Github, ExternalLink, Youtube, StickyNote, Lock, LockOpen } from "lucide-react";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Badge
                  variant="outline"
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex flex-wrap">
                    <MailIcon className="size-4" />
                    <span className="ml-2">{RESUME_DATA.contact.email}</span>
                  </a>
                </Badge>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Badge
                  variant="outline"
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`} className="flex flex-wrap">
                    <PhoneIcon className="size-4" />
                    <span className="ml-2">{RESUME_DATA.contact.tel}</span>
                  </a>
                </Badge>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">About</h2>
            <div className="mt-2 flex flex-wrap gap-1">
            {RESUME_DATA.contact.social.map((social) => (
              <Badge
                variant="outline"
                className="w-100"
                key={social.name}
              >
                <a
                  className="flex flex-wrap"
                  href={social.url}
                  target="_blank"
                >
                  <social.icon className="size-4" />
                  <span className="ml-2">{social.name}</span>
                </a>
              </Badge>
              ))}
            </div>
          </div>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  { work.company ?
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="rightSide font-mono text-sm tabular-nums text-gray-500">
                      {work.location}
                    </div>
                  </div>
                  : null }
                  <div className="flex justify-between">
                    <h4 className="font-mono text-sm leading-none">
                      {work.title}
                    </h4>
                    <div className="rightSide font-mono text-sm leading-none text-gray-500">
                      {work.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
                <CardContent>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <i className="mt-1">{work.projectsTag}</i>
                  {work.projects?.map((project) => (
                    <Badge
                      variant="outline"
                      className="w-100"
                      key={project.title}
                    >
                      <a
                        className="flex flex-wrap gep-5 mt-1"
                        href={project.link?.href}
                        target="_blank"
                      >
                        {
                        project.link?.href ?
                          <ExternalLink className="size-3 mr-2" />
                        :
                          <Lock className="size-3 mr-2" />
                        }
                        <div>{project.title}</div>
                      </a>
                    </Badge>
                  ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="font-mono text-sm tabular-nums text-gray-500">
                      {education.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.languages.map((language) => {
              return (
                <Badge key={language.label} variant="secondary">
                  <a className="mr-2">{language.label}</a> |
                  <small>{language.level}</small>
                </Badge>
              )
            })}
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Other Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-3 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              interface LinkObj {
                label: string;
                icon?: string;
                href: string;
              }
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={project.link ?? undefined}
                  links={(project.links ?? []) as LinkObj[]}
                />
              );
            })}
          </div>
          <div className="text-sm tabular-nums text-gray-500">
            For more, you can check out <a className="font-bold" href={RESUME_DATA.contact.social[0].url}>my github repositories and gists</a>.
          </div>
        </Section>
      </section>
    </main>
  );
}
