export default function PersonalDetailsForm(
    {        
        name,
        email,
        linkedIn,
        github,
        portfolio,
        setName,
        setEmail,
        setLinkedIn,
        setGithub,
        setPortfolio
    }
) {
    return (
        <section className="personal-details-form">
            <h2>Personal Details</h2>
            <div className="form-group">
                <div className="form-row">
                    <label htmlFor="name"><b>Name:</b></label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="email"><b>Email:</b></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="linkedin"><b>LinkedIn:</b></label>
                    <input
                        type="url"
                        id="linkedin"
                        value={linkedIn}
                        onChange={(e) => setLinkedIn(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="github"><b>GitHub:</b></label>
                    <input
                        type="url"
                        id="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="portfolio"><b>Portfolio:</b></label>
                    <input
                        type="url"
                        id="portfolio"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                    />
                </div>
            </div>
        </section>
    );
}