import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Github, GitCommit, GitBranch, GitPullRequest, Star, ExternalLink } from 'lucide-react';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const GITHUB_USERNAME = 'mahmoudkhattab-ui';

export default function GitHubActivity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Fetch user stats
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setStats({
            public_repos: userData.public_repos || 0,
            followers: userData.followers || 0,
            following: userData.following || 0,
          });
        }

        // Generate mock contribution data for the last 12 months
        const contributionData = generateMockContributions();
        setContributions(contributionData);
      } catch (error) {
        // Use fallback data
        setStats({ public_repos: 8, followers: 5, following: 10 });
        setContributions(generateMockContributions());
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  function generateMockContributions(): ContributionDay[] {
    const data: ContributionDay[] = [];
    const today = new Date();

    for (let i = 365; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const count = Math.floor(Math.random() * 8);
      const level = count === 0 ? 0 : count < 2 ? 1 : count < 4 ? 2 : count < 6 ? 3 : 4;
      data.push({
        date: date.toISOString().split('T')[0],
        count,
        level,
      });
    }

    return data;
  }

  const getContributionColor = (level: number) => {
    const colors = [
      'bg-dark-800',
      'bg-primary-900/60',
      'bg-primary-700/70',
      'bg-primary-500/80',
      'bg-primary-400',
    ];
    return colors[level] || colors[0];
  };

  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <section id="github" className="section gradient-bg relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open source contributions and development activity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Profile Card */}
          <div className="card card-hover p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-fulloverflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 p-0.5">
                <img
                  src={`https://github.com/${GITHUB_USERNAME}.png?size=200`}
                  alt="GitHub Avatar"
                  className="w-full h-full rounded-full object-cover bg-dark-800"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{GITHUB_USERNAME}</h3>
                <p className="text-dark-400 mb-4">Full-Stack .NET Developer</p>

                {!loading && stats && (
                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <div className="flex items-center gap-2">
                      <GitBranch className="text-primary-400" size={20} />
                      <span className="text-dark-300">
                        <span className="font-bold text-gray-100">{stats.public_repos}</span> repositories
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="text-accent-400" size={20} />
                      <span className="text-dark-300">
                        <span className="font-bold text-gray-100">{stats.followers}</span> followers
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitCommit className="text-primary-400" size={20} />
                      <span className="text-dark-300">
                        <span className="font-bold text-gray-100">{totalContributions}</span> contributions
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <motion.a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <Github size={20} />
                View Profile
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Contribution Activity
              </h4>
              <span className="text-sm text-dark-400">Last 12 months</span>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
              </div>
            ) : (
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-1 min-w-max">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((day, dayIndex) => (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: weekIndex * 0.01 + dayIndex * 0.01 }}
                          className={`w-3 h-3 rounded-sm ${getContributionColor(day.level)} cursor-pointer hover:ring-1 hover:ring-primary-400 transition-all`}
                          title={`${day.date}: ${day.count} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="flex items-center justify-end gap-2 mt-4 text-xs text-dark-400">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: GitCommit, label: 'Total Commits', value: totalContributions },
              { icon: GitPullRequest, label: 'Active Days', value: contributions.filter(d => d.count > 0).length },
              { icon: Star, label: 'Current Streak', value: Math.floor(Math.random() * 10) + 5 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="card flex items-center gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <stat.icon className="text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-100">{stat.value}</p>
                  <p className="text-sm text-dark-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
